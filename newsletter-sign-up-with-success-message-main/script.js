const inputForm = document.querySelector('form');
const stage1 = document.getElementById('stage1');
const stage2 = document.getElementById('stage2');
const inputField = document.getElementById('email');
const btnSubscribe = document.getElementById('subscribe');
const btnDismiss = document.getElementById('dismiss');
const errorMessage = document.querySelector('#stage1 > form > label > span');
const emailDisplay = document.querySelector('#stage2 > div > b');

function showError() {
	errorMessage.classList.remove('hidden');
	inputField.classList.add('error');
	inputField.focus();
}

function hideError() {
	errorMessage.classList.add('hidden');
	inputField.classList.remove('error');
}

inputField.addEventListener('input', (event) => hideError());

inputForm.addEventListener('submit', (event) => {
	event.preventDefault();
	if (inputField.validity.valid) {
		stage1.classList.add('hidden');
		stage2.classList.remove('hidden');
		emailDisplay.textContent = inputField.value;
	} else {
		showError();
	}
});
