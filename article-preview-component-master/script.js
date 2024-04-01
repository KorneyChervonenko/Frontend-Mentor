'use script';
console.clear();

const shareBtn = document.querySelector('#person > button');
const personSection = document.getElementById('person');
const shareSection = document.getElementById('popup');

hideSharePanel();

function showSharePanel() {
	shareSection.classList.remove('hidden');
	shareBtn.disabled = true;
}

function hideSharePanel() {
	shareBtn.disabled = false;
	if (!shareSection.classList.contains('hidden')) shareSection.classList.add('hidden');
}

shareBtn.addEventListener('click', showSharePanel);

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && !(event.ctrlKey || event.altKey || event.shiftKey)) hideSharePanel();
});
