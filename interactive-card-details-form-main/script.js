'use strict';
console.clear();

const form = document.querySelector('form');
const thanx = document.querySelector('section.thanx');
const continueBtn = thanx.querySelector('button');
const cardHolderNameInput = form.querySelector('input[name="cardholder-name"]');
const cardNumberInput = form.querySelector('input[name="card-number"]');
const monthInput = form.querySelector('input[name="month"]');
const yearInput = form.querySelector('input[name="year"]');
const cvcInput = form.querySelector('input[name="cvc"]');
const inputFields = [cardHolderNameInput, cardNumberInput, monthInput, yearInput, cvcInput];

const cardFront = document.querySelector('section.card > section.card-front');
const cardBack = document.querySelector('section.card > section.card-back');
const cardNumberOutput = cardFront.querySelector('div.card-number');
const cardHolderNameOutput = cardFront.querySelector('div.name-date > span.cardholder-name');
const monthOutput = cardFront.querySelector('div.name-date .month-output');
const yearOutput = cardFront.querySelector('div.name-date .year-output');
const cvcOutput = cardBack.querySelector('.cvc');

// form.style.backgroundColor = 'aqua';
{
	// remove all non-digit characters from input string and split it for chunks with length = 4 separated by spaces
	function cardNumberFormat(str) {
		const onlyDigits = str.replaceAll(/\D/g, '').substring(0, 16);
		let result = '';
		[...onlyDigits].forEach((ch) => {
			result += [4, 9, 14].includes(result.length) ? ` ${ch}` : ch;
		});
		return result;
	}

	// mirroring input string on the credit card. If input string is empty display default content
	function transmitInOut(inElement, outElement, defaultContent) {
		outElement.textContent = inElement.value;
		if (outElement.textContent.length === 0) outElement.textContent = defaultContent;
	}

	cardHolderNameInput.addEventListener('input', (event) => {
		transmitInOut(event.currentTarget, cardHolderNameOutput, 'Jane Appleseed');
		hideError(event.currentTarget);
	});

	cardNumberInput.addEventListener('input', (event) => {
		event.currentTarget.value = cardNumberFormat(event.currentTarget.value);
		transmitInOut(event.currentTarget, cardNumberOutput, '0000 0000 0000 0000');
		hideError(event.currentTarget);
	});

	monthInput.addEventListener('input', (event) => {
		event.currentTarget.value = event.currentTarget.value.replaceAll(/\D/g, '').substring(0, 2); // remove all non-digit characters from input string
		transmitInOut(event.currentTarget, monthOutput, '00');
		hideError(event.currentTarget);
	});

	yearInput.addEventListener('input', (event) => {
		event.currentTarget.value = event.currentTarget.value.replaceAll(/\D/g, '').substring(0, 2); // remove all non-digit characters from input string
		transmitInOut(event.currentTarget, yearOutput, '00');
		hideError(event.currentTarget);
	});

	cvcInput.addEventListener('input', (event) => {
		cvcInput.value = cvcInput.value.replaceAll(/\D/g, '').substring(0, 3); // remove all non-digit characters from input string
		transmitInOut(event.currentTarget, cvcOutput, '000');
		hideError(event.currentTarget);
	});
}

function showError(inputField, message = 'error') {
	inputField.classList.add('error-mark');
	inputField.nextElementSibling.textContent = message;
}

function hideError(inputField) {
	inputField.classList.remove('error-mark');
	inputField.nextElementSibling.textContent = '';
}

function isCardNumberValid(cardNumber) {
	const regex =
		/^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
	return regex.test(cardNumber);
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let formIsValid = true;

	inputFields.forEach((inputField) => {
		if (!inputField.validity.valid) {
			formIsValid = false;
			let errorMessage;
			switch (true) {
				case inputField.validity.valueMissing:
					errorMessage = "Can't be blank";
					break;
				case inputField.validity.patternMismatch:
					errorMessage = 'Wrong format';
					break;
			}
			showError(inputField, errorMessage);
		}
	});
	if (!formIsValid) return;
	const cardNumberStr = cardNumberInput.value.replaceAll(/\D/g, ''); // only digits
	console.log('built-in validation passed...OK', cardNumberStr);
	if (!isCardNumberValid(cardNumberStr)) {
		showError(cardNumberInput, 'Must be real card number or just use 371449635398431 for test');
		return;
	}
	console.log('card number validation passed...OK', cardNumberStr);
	form.classList.add('hidden');
	thanx.classList.remove('hidden');
});

continueBtn.addEventListener('click', (event) => {
	form.classList.remove('hidden');
	thanx.classList.add('hidden');
	inputFields.forEach((inputField) => (inputField.value = ''));
});
