'use script';
console.clear();

const inputForm = document.querySelector('form');
const inputField = document.querySelector('input[type="email"]');
const errorMsg = document.querySelector('form em');
const btnSubmit = document.querySelector('button[type="submit"]');

// btnSubmit.style.backgroundColor = 'aqua'

function showErrorMsg() {
	inputField.classList.add('red-border');
	errorMsg.hidden = false;
}

function hideErrorMsg() {
	inputField.classList.remove('red-border');
	errorMsg.hidden = true;
}

inputField.addEventListener('input', (event) => hideErrorMsg());

inputForm.addEventListener('submit', (event) => {
	event.preventDefault();
	if (inputField.validity.valid) inputForm.submit();
	else showErrorMsg();
	return;
});
