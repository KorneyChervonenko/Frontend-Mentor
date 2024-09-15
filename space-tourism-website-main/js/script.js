'use strict';
console.clear();
console.log('script.js running...');

// import { DATA } from './data.mjs';
import { STATE } from './state.mjs';
import { HeaderMenu } from './headerMenu.mjs';
import { SectionView } from './sectionView.mjs';
import { DestinationsView } from './destinationsView.mjs';
import { CrewView } from './crewView.mjs';
import { TechView } from './techView.mjs';

function headerMenuHandler(event) {
	event.preventDefault();
	// console.log(event.target);
	// console.log(event.currentTarget);
	if (event.target.role === 'menuitem') {
		hideAllSections();
		const selectedSection = STATE.sections.at(Number(event.target.dataset.index));
		selectedSection.show();
	}
}

function planetMenuHadler(event) {
	event.preventDefault();
	STATE.currentPlanetIndex = Number(event.target.dataset.index);
	destinationsView.update();
}

function memberMenuHadler(event) {
	event.preventDefault();
	STATE.currentMemberIndex = Number(event.target.dataset.index);
	crewView.update();
}

function techMenuHadler(event) {
	event.preventDefault();
	STATE.currentTechIndex = Number(event.target.dataset.index);
	techView.update();
}

// STATE.currentPlanetIndex = 2;
// STATE.currentMemberIndex = 1;
// STATE.currentTechIndex = 1;

const homeView = new SectionView('.home');
const destinationsView = new DestinationsView();
const crewView = new CrewView();
const techView = new TechView();

console.log(STATE.sections);

const headerHMenu = new HeaderMenu('.horizontal-menu');
const headerVMenu = new HeaderMenu('.vertical-menu');
// console.log(STATE.sections);

function hideAllSections() {
	STATE.sections.forEach((section) => section.hide());
}

window.addEventListener('load', (event) => {
	console.log('page is fully loaded');

	headerHMenu.addClickHandler(headerMenuHandler);
	headerVMenu.addClickHandler(headerMenuHandler);
	destinationsView.addMenuHandler(planetMenuHadler);
	crewView.addMenuHandler(memberMenuHadler);
	techView.addMenuHandler(techMenuHadler);
});
