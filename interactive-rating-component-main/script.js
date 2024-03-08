'use strict';
console.clear();
let selectedRating;
let selectedMark;
const ratingMarks = document.querySelectorAll('#rating .encircled');
const btnSubmit = document.querySelector('button');
const sectionPrompt = document.getElementById('prompt');
const sectionThanx = document.getElementById('thanx');
const resultInfo = document.getElementById('result');

btnSubmit.disabled = true;
btnSubmit.addEventListener('click', (event) => {
	sectionPrompt.classList.add('hidden');
	sectionThanx.classList.remove('hidden');
});

sectionThanx.classList.add('hidden');

ratingMarks.forEach((mark) => {
	mark.addEventListener('click', (event) => {
		if (selectedMark) selectedMark.classList.remove('selected');
		selectedMark = event.currentTarget;
		selectedMark.classList.add('selected');

		selectedRating = Number(event.currentTarget.textContent);
		resultInfo.textContent = `You selected ${selectedRating} out of ${ratingMarks.length}`;
		btnSubmit.disabled = false;
	});
});
