'use strict';
console.clear();
console.log('script started');

function showErr(inputField, errMsg) {
	const errMsgFieldID = inputField.name + '-error';
	const errMsgField = document.getElementById(errMsgFieldID);
	errMsgField.textContent = errMsg;
	errMsgField.classList.remove('hidden');
	inputField.classList.add('errIndicator');
	inputField.setAttribute('aria-invalid', 'true');
}

function hideErr(inputField) {
	const errMsgFieldID = inputField.name + '-error';
	const errMsgField = document.getElementById(errMsgFieldID);
	errMsgField.textContent = '';
	errMsgField.classList.add('hidden');
	inputField.classList.remove('errIndicator');
	inputField.setAttribute('aria-invalid', 'false');
}

const successMsgElement = document.querySelector('.success-msg');
const inputForm = document.querySelector('form');
console.log(inputForm.elements);
inputForm.addEventListener('submit', (event) => {
	event.preventDefault();
	if (inputForm.checkValidity()) {
		console.log('form is valid');
		successMsgElement.classList.remove('hidden');
		inputForm.reset();
		return;
	} else {
		console.log('something wrong');
		const invalidFields = inputForm.querySelectorAll(':invalid');
		invalidFields.forEach((field) => {
			if (!field.validity.valid) {
				let errMsg = 'something wrong';
				switch (true) {
					case field.validity.valueMissing:
						switch (field.name) {
							case 'first-name':
							case 'last-name':
							case 'email':
							case 'request-message':
								errMsg = 'This field is required';
								break;
							case 'query-type':
								errMsg = 'Please select a query type';
								break;
							case 'consent-status':
								errMsg = 'To submit this form, please consent to being contacted';
								break;
						}
						break;
					case field.validity.typeMismatch:
						switch (field.name) {
							case 'email':
								errMsg = 'Please enter a valid email address';
								break;
						}
				}
				showErr(field, errMsg);
			}
		});
	}
});

inputForm.addEventListener('click', (event) => {
	if (event.target.classList.contains('errIndicator')) hideErr(event.target);
});
