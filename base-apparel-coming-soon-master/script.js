'use strict';

const form = document.querySelector('form');
const inputField = document.querySelector('form > input');

inputField.addEventListener('input', (event) => hideError(inputField));

function showError(element) {
	element.classList.add('error-sign');
	element.nextElementSibling.hidden = false;
}

function hideError(element) {
	element.classList.remove('error-sign');
	element.nextElementSibling.hidden = true;
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (inputField.validity.valid) form.submit();
	else showError(inputField);
	return;
});
