'use strict';
console.clear();
console.log('script started');

import { CUSTOMERS, STATE } from './config.js';
import customerView from './customerView.js';

const navBar = document.querySelector('nav');

navBar.addEventListener('click', (event) => {
	event.preventDefault();
	if (event.target.tagName === 'BUTTON') {
		changeCurrentCustomer(event.target.dataset.direction);
		const currentCustomer = CUSTOMERS.at(STATE.currentCustomerIndex);
		customerView.update(currentCustomer);
	}
});

function changeCurrentCustomer(direction) {
	switch (direction) {
		case 'prev':
			STATE.currentCustomerIndex =
				STATE.currentCustomerIndex === 0 ? CUSTOMERS.length - 1 : STATE.currentCustomerIndex - 1;
			break;

		case 'next':
			STATE.currentCustomerIndex =
				STATE.currentCustomerIndex === CUSTOMERS.length - 1 ? 0 : STATE.currentCustomerIndex + 1;
			break;
	}
}

function init() {
	const currentCustomer = CUSTOMERS.at(STATE.currentCustomerIndex);
	customerView.update(currentCustomer);
}

init();
