'use strict';
console.clear();
console.log('script.js running...');
import { STATE } from './state.mjs';

import { HeaderMenu } from './headerMenu.mjs';
import { FooterMenu } from './footerMenu.mjs';

import { SectionView } from './sectionView.mjs';
import { PersonalInfoView } from './personal-InfoView.mjs';
import { PlansView } from './plansView.mjs';
import { AddonsView } from './addonsView.mjs';
import { SummaryView } from './summaryView.mjs';

function savePersonalInfo(section) {
	const formData = new FormData(section.form);
	const personInfo = Object.fromEntries(formData);
	STATE.userData.name = personInfo.name;
	STATE.userData.email = personInfo.email;
	STATE.userData.tel = personInfo.tel;
	return;
}

function savePlansInfo(section) {
	const formData = new FormData(section.form);
	const plansInfo = Object.fromEntries(formData);
	STATE.userData.plan = plansInfo.plan;
	STATE.userData.period = section.periodSwitch.checked ? 'yearly' : 'monthly';
	return;
}

function saveAddonsInfo(section) {
	STATE.userData.addons.clear();
	section.checkboxes.forEach((checkbox) => {
		if (checkbox.checked) STATE.userData.addons.add(checkbox.value);
	});
	return;
}

function saveInputSectionInfo(section) {
	switch (section.selector) {
		case '.personal-info':
			if (!isPersonalFormValid(section)) return false;
			savePersonalInfo(section);
			break;

		case '.plans':
			savePlansInfo(section);
			break;

		case '.add-ons':
			saveAddonsInfo(section);
			break;
	}
	return true;
}

function isPersonalFormValid(section) {
	if (section.form.checkValidity()) return true;

	headerMenu.update();

	section.inputFields.forEach((field) => {
		switch (true) {
			case field.validity.valueMissing:
				section.showError(field, 'This field is required');
				break;

			case field.validity.typeMismatch:
				section.showError(field, 'Incorrect format');
				break;

			case field.validity.patternMismatch:
				section.showError(field, 'Incorrect format');
				break;
		}
	});
	return false;
}

function mainMenuHadler(event) {
	event.preventDefault();
	// console.log(event.currentTarget);
	// console.log(event.target);

	const currentSection = sections.at(STATE.currentPageIndex - 1);
	if (!saveInputSectionInfo(currentSection)) return;
	console.log('inputs validation passed...');
	STATE.currentPageIndex = Number(event.target.dataset.index);
	headerMenu.update();
	footerMenu.update();
	// plansView.update();
	addonsView.update();
	summaryView.update();

	hideAllSections();
	const newSection = sections.at(STATE.currentPageIndex - 1);
	newSection.show();
}

function footerMenuHadler(event) {
	event.preventDefault();

	const currentSection = sections.at(STATE.currentPageIndex - 1);
	if (!saveInputSectionInfo(currentSection)) return;
	console.log('inputs validation passed...');

	// может стоит просто нажимать соответствующую радиокнопку ?
	const currentHeadMenuButtonIndex = STATE.currentPageIndex - 1;
	let newHeadMenuButtonIndex;

	console.log(currentHeadMenuButtonIndex);

	switch (event.target.dataset.title) {
		case 'prev':
			STATE.currentPageIndex = Math.max(STATE.currentPageIndex - 1, 1);
			// newHeadMenuButtonIndex = Math.max(currentHeadMenuButtonIndex - 1, 0);
			break;
		case 'next':
			STATE.currentPageIndex = Math.min(STATE.currentPageIndex + 1, STATE.maxPageIndex);
			// newHeadMenuButtonIndex = Math.min(currentHeadMenuButtonIndex + 1, STATE.maxPageIndex - 1);
			break;
	}

	// if (newHeadMenuButtonIndex < headerMenu.buttons.length) {
	// 	const newHeadMenuButton = headerMenu.buttons.at(newHeadMenuButtonIndex);
	// 	newHeadMenuButton.click();
	// 	return;
	// }

	// headerMenu.update();
	// footerMenu.update();
	// // plansView.update();
	// addonsView.update();
	// summaryView.update();

	hideAllSections();
	const newSection = sections.at(STATE.currentPageIndex - 1);
	newSection.show();

	headerMenu.update();
	footerMenu.update();
	// // plansView.update();
	addonsView.update();
	summaryView.update();
}

function inputHandler(event) {
	event.preventDefault();
	personalInfoView.hideError(event.target);
}

function periodSwitchHandler(event) {
	event.preventDefault();
	STATE.userData.period = event.target.checked ? 'yearly' : 'monthly';

	if (summaryView.periodSwitch.checked != event.target.checked) summaryView.periodSwitch.click();
	if (plansView.periodSwitch.checked != event.target.checked) plansView.periodSwitch.click();

	// plansView.update();
	addonsView.update();
	summaryView.update();
}

// STATE.currentPageIndex = 2;

const headerMenu = new HeaderMenu();
// STATE.maxPageIndex = headerMenu.buttons.length;
const footerMenu = new FooterMenu();

const personalInfoView = new PersonalInfoView();
const plansView = new PlansView();
const addonsView = new AddonsView();
const summaryView = new SummaryView();
const thanxView = new SectionView('.thanx');

// STATE. ????
const sections = [personalInfoView, plansView, addonsView, summaryView, thanxView];
STATE.maxPageIndex = sections.length;

const currentSection = sections.at(STATE.currentPageIndex - 1);
currentSection.show();

function hideAllSections(params) {
	sections.forEach((section) => section.hide());
}

window.addEventListener('load', (event) => {
	console.log('page is fully loaded');
	headerMenu.addClickHandler(mainMenuHadler);
	footerMenu.addClickHandler(footerMenuHadler);
	personalInfoView.addInputHandler(inputHandler);
	plansView.addCheckHandler(periodSwitchHandler);
	summaryView.addCheckHandler(periodSwitchHandler);
});
