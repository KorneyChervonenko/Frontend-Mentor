import { DATA } from './config.mjs';
// import { getCurrencyFormatted, getCartData } from './helpers.mjs';
// import { DessertMenuView } from './dessert-menu-view.mjs';
import { Dessert } from './dessert.mjs';
import { CartView } from './cartview.mjs';
// import { cartView } from './cartview.mjs';
// import { successView } from './successview.mjs';
import { SuccessView } from './successview.mjs';
import { DessertMenuView } from './dessert-menu-view.mjs';

// ('use strict');
console.clear();
console.log('script.js is running');

async function fetchData(url) {
	const fetchResult = await fetch(url);
	const data = await fetchResult.json();
	return data;
}

function initDATA(dataFromFile) {
	dataFromFile.forEach((dessertData) => {
		DATA.add(new Dessert(dessertData));
	});
}

function ctrlBtnHandler(event, dessert) {
	switch (event.currentTarget) {
		case dessert.menuItemAddToCartBtn:
			// console.log('add to cart');
			dessert.increaseQtyInCart();
			dessert.renderCartItem(cartView);
			dessert.removeCartItemBtn.addEventListener('click', (event) => {
				dessert.inCart = 0;
				dessert.cartItem.remove();
				dessert.updateMenuItemCtrlBtn();
				cartView.update();
			});
			break;

		case dessert.menuItemDecBtn:
			// console.log('decrease');
			dessert.decreaseQtyInCart();
			dessert.updateCartItem();
			if (dessert.inCart === 0) dessert.cartItem.remove();
			break;

		case dessert.menuItemIncBtn:
			// console.log('increase');
			dessert.increaseQtyInCart();
			dessert.updateCartItem();
			break;
	}

	cartView.update();
	dessert.updateMenuItemCtrlBtn();
}

function addCtrlBtnHandlers(data) {
	data.forEach((dessert) => {
		dessert.addCtrlBtnHandler(ctrlBtnHandler);
	});
}

function confirmBtnHandler(event) {
	event.preventDefault();
	// console.log('confirm button clicked');
	successView.render(DATA);
	successView.show();
	successView.scrollIntoView();
	dessertMenu.disable();
	cartView.disable();
}

function startNewOrderBtnHandler(event) {
	event.preventDefault();
	// console.log('start new order button clicked');
	successView.clear();
	successView.hide();
	dessertMenu.enable();
	dessertMenu.clear(DATA);
	cartView.enable();
	cartView.update();
}

const dessertMenu = new DessertMenuView();
const cartView = new CartView();
const successView = new SuccessView();

window.addEventListener('load', async (event) => {
	console.log('page is fully loaded');
	const dataFromFile = await fetchData('data.json');
	initDATA(dataFromFile);
	dessertMenu.render(DATA);
	addCtrlBtnHandlers(DATA);
	cartView.addConfirmBtnHandler(confirmBtnHandler);
	successView.addStartNewOrderBtnHandler(startNewOrderBtnHandler);
});
