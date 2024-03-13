'use strict';
// console.clear();

const inputFields = document.querySelectorAll('input');
inputFields.forEach((element) => element.addEventListener('input', (event) => hideError(element)));

const inputForm = document.querySelector('section#card form');

inputForm.addEventListener('submit', (event) => {
	let isValid = true;
	event.preventDefault();
	inputFields.forEach((inputElement) => {
		if (!inputElement.validity.valid) {
			isValid = false;
			showError(inputElement);
		}
	});
	if (isValid) inputForm.submit();
});

function showError(element) {
	element.classList.add('error-sign');
	element.nextElementSibling.classList.remove('hidden');
}

function hideError(element) {
	element.classList.remove('error-sign');
	element.nextElementSibling.classList.add('hidden');
}
