'use strict';
console.clear();
console.log('running...');

// const fileName = 'data.json';
// async function printJSON() {
// 	const response = await fetch(fileName);
// 	const json = await response.json();
// 	console.log(json);
// }

// printJSON();

const prevTimeStr = { daily: 'Yesterday', weekly: 'Last Week', monthly: 'Last Month' };

const piles = {}; // dictionary of output fields at piles
const pileElements = document.querySelectorAll('section.pile');
pileElements.forEach((pile) => {
	const title = pile.querySelector('h2').textContent.toLowerCase();
	const current = pile.querySelector('.current');
	const previous = pile.querySelector('.previous');
	// piles[title] = {current: current, previous, previous};
	piles[title] = { current, previous };
});

const navPanel = document.querySelector('header > nav > ul');
const buttons = navPanel.querySelectorAll('button');
// buttons.forEach(button=>button.style.backgroundColor='red');
const [dailyBtn, weeklyBtn, monthlyBtn] = buttons;

navPanel.addEventListener('click', (event) => {
	event.preventDefault();

	if (event.target.tagName !== 'BUTTON') return;
	buttons.forEach((button) => button.classList.remove('white-color'));
	event.target.classList.add('white-color');

	const timeFrame = event.target.textContent.toLowerCase();

	// iterate over records in data file and populate output fields at piles
	data.forEach((item) => {
		const title = item.title.toLowerCase();
		const timeFrameData = item.timeframes[timeFrame];
		const pile = piles[title];
		pile.current.textContent = `${timeFrameData.current}hrs`;
		pile.previous.textContent = `${prevTimeStr[timeFrame]} - ${timeFrameData.previous}hrs`;
	});
});

weeklyBtn.click();
