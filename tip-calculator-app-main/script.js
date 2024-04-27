'use strict';
console.clear();

const inputForm = document.getElementById('input-form');
const billField = inputForm.querySelector('input[name="bill-sum"]');
const peopleNumberField = inputForm.querySelector('input[name="number-people"]');
// inputForm.style.backgroundColor = 'aqua';
// const tipFields = inputForm.querySelectorAll('fieldset > ul > li > label > input[type="radio"]');
const radioButtonsSet = inputForm.querySelector('fieldset');
const tipFields = radioButtonsSet.querySelectorAll('input[type="radio"]');
const customTipField = inputForm.querySelector('.custom-percent-input');
const customTipFieldRadio = inputForm.querySelector('.custom-percent > input[value="custom"]');

// const submitBtn = inputForm.querySelector('button[type="submit"]');

const resetBtn = document.querySelector('.output > button[type="reset"]');
const tipAmount = document.querySelector('.output .tip-amount > .sum');
const total = document.querySelector('.output .total > .sum');

function displayResult(tipSumPerson = 0, totalSumPerson = 0) {
	tipAmount.textContent = tipSumPerson.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	total.textContent = totalSumPerson.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function showError(inputField, errMsg) {
	const errMsgField = inputField.parentElement.querySelector('.error-message');
	errMsgField.textContent = errMsg;
}

function hideError(inputField) {
	const errMsgField = inputField.parentElement.querySelector('.error-message');
	errMsgField.textContent = '';
	displayResult(0, 0);
}

billField.addEventListener('input', (event) => {
	hideError(event.target);
	if (!event.target.validity.valid) {
		let errMsg = 'input error';
		switch (true) {
			case event.target.validity.valueMissing:
				errMsg = "Can't be empty";
				break;

			case event.target.validity.badInput:
				errMsg = 'Must be a number';
				break;

			case event.target.validity.rangeUnderflow:
				errMsg = 'Must be positive';
				break;

			case event.target.validity.stepMismatch:
				errMsg = 'Max 2 digits after period';
				break;
		}
		showError(event.target, errMsg);
	}
});

peopleNumberField.addEventListener('input', (event) => {
	hideError(event.target);
	if (!event.target.validity.valid) {
		let errMsg = 'input error';
		switch (true) {
			case event.target.validity.valueMissing:
				errMsg = "Can't be empty";
				break;

			case event.target.validity.badInput:
				errMsg = 'Must be a number';
				break;

			case event.target.validity.rangeUnderflow:
				errMsg = 'Must be > zero';
				break;

			case event.target.validity.stepMismatch:
				errMsg = 'Must be an integer';
				break;
		}
		showError(event.target, errMsg);
	}
});

customTipField.addEventListener('input', (event) => {
	// auxiliaryElement need for show\hide error message in Legend element the same way as in Bill and Number of People
	const auxiliaryElement = inputForm.querySelector('#input-form > fieldset > legend > .error-message');
	hideError(auxiliaryElement);
	if (!event.target.validity.valid) {
		let errMsg = 'input error';
		switch (true) {
			case event.target.validity.valueMissing:
				errMsg = "Can't be empty";
				break;

			case event.target.validity.badInput:
				errMsg = 'Must be a number';
				break;

			case event.target.validity.rangeUnderflow:
				errMsg = 'Must be positive';
				break;

			case event.target.validity.stepMismatch:
				errMsg = 'Must be an integer';
				break;
		}
		showError(auxiliaryElement, errMsg);
	}
});

radioButtonsSet.addEventListener('input', (event) => {
	// if custom radio field selected it must be filled
	if (customTipFieldRadio.checked) customTipField.required = true;
	else customTipField.required = false;
});

['submit', 'change'].forEach((eventType) =>
	inputForm.addEventListener(eventType, (event) => {
		event.preventDefault();

		if (!inputForm.checkValidity()) return;
		const billValue = Number(billField.value);
		const selectedTipField = Array.from(tipFields).find((field) => field.checked);
		if (!selectedTipField) return;
		let tipValue = selectedTipField.value;
		if (tipValue === 'custom') tipValue = customTipField.value;
		tipValue = Number(tipValue);
		const peopleNumber = Number(peopleNumberField.value);

		console.log('bill:', billValue);
		console.log('tip:', tipValue);
		console.log('people number:', peopleNumber);

		const totalSumPerson = (billValue * (1 + tipValue / 100)) / peopleNumber;
		const tipSumPerson = totalSumPerson - billValue / peopleNumber;
		displayResult(totalSumPerson, tipSumPerson);
	})
);

resetBtn.addEventListener('click', (event) => {
	// console.log('reset');
	displayResult(0, 0);
	hideError(billField);
	hideError(peopleNumberField);
	// auxiliaryElement need for show\hide error message in Legend element the same way as in Bill and Number of People
	const auxiliaryElement = inputForm.querySelector('#input-form > fieldset > legend > .error-message');
	hideError(auxiliaryElement);
});
