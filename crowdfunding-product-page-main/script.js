'use strict';
console.clear();
console.log('script started');

const data = {
	// currentSum: 89914,
	currentSum: 50000,
	totalBackers: 100,
	daysLeft: 60,
	stock: {
		bambooStand: 100,
		blackEditionStand: 66,
		mahoganySpecialEdition: 1,
	},
};

const header = document.querySelector('header');
const main = document.querySelector('main');
const basketElement = document.querySelector('.basket');
const thanksElement = document.querySelector('.thanks');
const gotitBtn = thanksElement.querySelector('button');
const UIElements = [header, main, basketElement, thanksElement];

const dashboard = document.querySelector('.dashboard');
const dashboardSum = dashboard.querySelector('.money > p:first-of-type');
const dasboardTotalBackers = dashboard.querySelector('.backers > p:first-of-type');
const dashboardDays = dashboard.querySelector('.days > p:first-of-type');
const dashboardProgress = dashboard.querySelector('progress');

const selectRewardBtns = main.querySelectorAll('main > .about > .card > .select-reward');
const btnBackProject = document.querySelector('.intro > nav > button');
const inputForms = basketElement.querySelectorAll('li.card > form');
const btnCloseBasket = basketElement.querySelector('button.close-basket');

function disableOthers(currentElement) {
	UIElements.filter((element) => element !== currentElement).forEach((element) => {
		// element.style.backgroundColor = 'red';
		// console.log(element);
		disableElement(element);
	});
}

function enableOthers(currentElement) {
	UIElements.filter((element) => element !== currentElement).forEach((element) => {
		// element.style.backgroundColor = 'red';
		// console.log(element);
		enableElement(element);
	});
}

function disableElement(element) {
	element.disabled = true;
	element.style.cursor = 'not-allowed';
	element.style.pointerEvents = 'none';
}

function enableElement(element) {
	element.disabled = false;
	element.style.cursor = '';
	element.style.pointerEvents = 'auto';
}

function updateDasboard() {
	// const dashboard = document.querySelector('.dashboard');
	// const dashboardSum = dashboard.querySelector('.money > p:first-of-type');
	// const dasboardTotalBackers = dashboard.querySelector('.backers > p:first-of-type');
	// const dashboardDays = dashboard.querySelector('.days > p:first-of-type');
	// const dashboardProgress = dashboard.querySelector('progress');

	dashboardSum.textContent = data.currentSum.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	dasboardTotalBackers.textContent = data.totalBackers;
	dashboardDays.textContent = data.daysLeft;
	dashboardProgress.value = data.currentSum;
}

function showElement(element) {}

inputForms.forEach((form) =>
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const form = event.target;
		const card = form.closest('li.card');
		const inputField = form.querySelector('input[type="number"]');

		// console.log(data);
		data.currentSum += Number(inputField.value);
		data.totalBackers++;
		data.stock[card.dataset.product]--;
		// console.log(data);
		// console.log(inputField.value);
		// console.log(card.dataset.product);
		updateDasboard();
		updateQtyFields();
		btnCloseBasket.click();
		thanksElement.classList.remove('hidden');
		thanksElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
		disableOthers(thanksElement);
	})
);

btnCloseBasket.addEventListener('click', (event) => {
	basketElement.classList.add('hidden');
	// enableElement(header);
	// enableElement(main);
	enableOthers(basketElement);
});

btnBackProject.addEventListener('click', (event) => {
	basketElement.classList.remove('hidden');
	basketElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	// disableElement(header);
	// disableElement(main);
	disableOthers(basketElement);
});

selectRewardBtns.forEach((btn) =>
	btn.addEventListener('click', (event) => {
		btnBackProject.click();
		// console.log(event.target.dataset.product);
		const selectedProduct = basketElement.querySelector(`.card[data-product=${event.target.dataset.product}]`);
		// selectedProduct.style.backgroundColor = 'red';
		const productRadioBtn = selectedProduct.querySelector('input[type="radio"]');
		productRadioBtn.checked = true;
		selectedProduct.scrollIntoView({ behavior: 'smooth', block: 'center' });
	})
);

gotitBtn.addEventListener('click', (event) => {
	thanksElement.classList.add('hidden');
	enableOthers(thanksElement);
});

function updateQtyFields() {
	const qtyFields = document.querySelectorAll('.qty');
	Object.entries(data.stock).forEach(([product, qty]) => {
		const productQtyFields = Array.from(qtyFields).filter((field) => field.dataset.product === product);
		// productQtyField.textContent = qty;
		productQtyFields.forEach((field) => (field.textContent = qty));

		if (qty === 0) {
			const cards = productQtyFields.map((field) => field.closest('.card'));
			cards.forEach((card) => {
				if (!card.classList.contains('deactivated')) card.classList.add('deactivated');
			});

			const selectedProduct = basketElement.querySelector(`.card[data-product=${product}]`);
			const productRadioBtn = selectedProduct.querySelector('input[type="radio"]');
			productRadioBtn.checked = false;
		}
	});
}

updateDasboard();
updateQtyFields();
