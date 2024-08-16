import { STATE } from './config.mjs';

export class CartButton {
	constructor() {
		this.parent = document.querySelector('header > button.cart-btn');
		this.qtyInCart = this.parent.querySelector('.qty-in-cart');
	}

	update() {
		if (STATE.currentProduct.inCart === 0) this.qtyInCart.classList.add('hidden');
		else this.qtyInCart.classList.remove('hidden');

		this.qtyInCart.textContent = STATE.currentProduct.inCart;
	}

	addClickHandler(handler) {
		this.parent.addEventListener('click', handler);
	}
}
