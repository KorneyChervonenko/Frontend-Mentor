import { STATE } from './config.mjs';

export class AddToCart {
	constructor() {
		this.parent = document.querySelector('form > .add-to-cart-btn');
	}

	update() {
		this.parent.disabled = Boolean(STATE.currentProduct.selectedQty === 0);
	}

	addClickHandler(handler) {
		this.parent.addEventListener('click', handler);
	}
}
