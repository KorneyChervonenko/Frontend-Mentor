'use strict';
console.clear();
console.log('script is running...');

// const data = [
// 	{
// 		day: 'mon',
// 		amount: 17.45,
// 	},
// 	{
// 		day: 'tue',
// 		amount: 34.91,
// 	},
// 	{
// 		day: 'wed',
// 		amount: 52.36,
// 	},
// 	{
// 		day: 'thu',
// 		amount: 31.07,
// 	},
// 	{
// 		day: 'fri',
// 		amount: 23.39,
// 	},
// 	{
// 		day: 'sat',
// 		amount: 43.28,
// 	},
// 	{
// 		day: 'sun',
// 		amount: 25.48,
// 	},
// ];

// function sleep(sleepDuration){
//     var now = new Date().getTime();
//     while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
// }
// sleep(1000);

async function getData(url) {
	const requestURL = url;
	const request = new Request(requestURL);
	const response = await fetch(request);
	const dataArr = await response.json();
	populateBars(dataArr);
}

function populateBars(dataArr) {
	const maxAmount = Math.max(...dataArr.map((dayData) => dayData.amount));
	const fontSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('font-size'));
	const maxBarHeight =
		fontSize * parseInt(getComputedStyle(document.documentElement).getPropertyValue('--max-bar-height')) || 162;
	const conversionFactor = maxBarHeight / maxAmount;
	const barCharList = document.querySelector('.bar-chart > ul');

	dataArr.forEach((dayData) => {
		const barBlockSize = Math.trunc(dayData.amount * conversionFactor);
		const dayAmount = dayData.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
		const html = `
            <li>
                <div class="sum">${dayAmount}</div>
                <div class="bar" data-day=${dayData.day}></div>
                <div class="day">${dayData.day}</div>
            </li>
        `;
		barCharList.insertAdjacentHTML('beforeend', html);
		const barElement = barCharList.querySelector(`.bar[data-day="${dayData.day}"]`);
		barElement.style.blockSize = `${barBlockSize}px`;
	});

	const currentWeekDay = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date()).toLowerCase();
	const currentWeekDayBar = barCharList.querySelector(`.bar[data-day="${currentWeekDay}"]`);
	currentWeekDayBar.style.backgroundColor =
		getComputedStyle(document.documentElement).getPropertyValue('--Cyan') || 'hsl(186, 34%, 60%)';
}

getData('data.json');
