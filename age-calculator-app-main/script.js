'use strict';
console.clear();

let inputDateValid = true;
let inputDateInFuture = false;

const currentYear = new Date().getFullYear();
const yearField = document.querySelector('#year-field input');
const dayField = document.querySelector('#day-field input');
const inputForm = document.querySelector('#input > form');
// dayField.style.backgroundColor = 'aqua';
const inputFields = document.querySelectorAll('#input > form > fieldset input');
const displayYears = document.getElementById('years');
const displayMonths = document.getElementById('months');
const displayDays = document.getElementById('days');

function getDeltaDate(startDate, endDate) {
	// just dumb stub for testing
	const deltaDate = new Date(endDate - startDate);
	return [deltaDate.getFullYear() - 1970, deltaDate.getMonth(), deltaDate.getDate()];
}

function isDateValid(year, month, day) {
	const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	return day <= daysInMonth.at(month - 1);
}

// clear result and error message on input event
inputFields.forEach((inputField) =>
	inputField.addEventListener('input', (event) => {
		hideInputError(inputField);
		clearOutput();
	})
);

function showError(inputField, message = 'error') {
	inputField.parentElement.classList.add('red-font');
	inputField.classList.add('red-border');
	inputField.previousElementSibling.textContent = message;
}

function hideInputError(inputFieldElement) {
	function hideFieldError(field) {
		field.parentElement.classList.remove('red-font');
		field.classList.remove('red-border');
		field.previousElementSibling.textContent = '';
	}
	if (inputDateInFuture || !inputDateValid) inputFields.forEach((inputField) => hideFieldError(inputField));
	else hideFieldError(inputFieldElement);
	inputDateValid = true;
	inputDateInFuture = false;
}

function clearOutput() {
	[displayYears, displayMonths, displayDays].forEach((element) => {
		if (element.textContent !== '--') element.textContent = '--';
	});
}

inputForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let formIsValid = true;
	inputFields.forEach((inputField) => {
		if (!inputField.validity.valid) {
			formIsValid = false;
			let errorMessage;
			// if (inputField.validity.valueMissing) errorMessage = 'This field is required';
			// else if (inputField.validity.patternMismatch) errorMessage = `Must be a valid ${inputField.name}`;

			switch (true) {
				case inputField.validity.valueMissing:
					errorMessage = 'This field is required';
					break;
				case inputField.validity.patternMismatch:
					errorMessage = `Must be a valid ${inputField.name}`;
					break;
			}

			showError(inputField, errorMessage);
		}
		if (Number(yearField.value) > currentYear) {
			formIsValid = false;
			showError(yearField, 'Must be in the past');
			return;
		}
	});

	if (!formIsValid) return;

	console.log('Passed OK. Year is not in the future');
	console.log('check if date is valid');

	const inputDateArr = [...inputFields].reverse().map((inputField) => Number(inputField.value));
	console.log(inputDateArr);

	if (!isDateValid(...inputDateArr)) {
		console.log('date is invalid');
		// formIsValid = false;
		inputDateValid = false;
		inputFields.forEach((inputField) => showError(inputField, ''));
		showError(dayField, 'Must be a valid date');
		return;
	}

	const inputDate = new Date(inputDateArr.join('-'));

	console.log(`Passed. ${inputDate.toDateString()} is valid`);
	console.log('check if date is in the past');

	if (inputDate > new Date()) {
		console.log('date is in the future');
		// formIsValid = false;
		inputDateInFuture = true;
		inputFields.forEach((inputField) => showError(inputField, ''));
		showError(dayField, 'Must be in the past');
		return;
	}
	console.log(`Passed. ${inputDate.toDateString()} is in the past`);

	const deltaDate = getDeltaDate(inputDate, new Date());
	displayYears.textContent = deltaDate[0];
	displayMonths.textContent = deltaDate[1];
	displayDays.textContent = deltaDate[2];
	// console.log(deltaDate);
});
