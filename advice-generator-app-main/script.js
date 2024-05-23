'use strict';
console.clear();
console.log('script started');

const diceBtn = document.querySelector('button');
const adviceID = document.querySelector('.advice-id');
const adviceText = document.querySelector('blockquote');

async function getAdvice() {
	const url = 'https://api.adviceslip.com/advice';
	const response = await fetch(url);
	const data = await response.json();
	adviceID.textContent = data.slip.id;
	adviceText.textContent = `“${data.slip.advice}”`;
}

diceBtn.addEventListener('click', getAdvice);

getAdvice();
