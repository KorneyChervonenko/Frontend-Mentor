import { STATE } from './config.mjs';

export class QtySelector {
	constructor() {
		this.parent = document.querySelector('form > .quantity-selector');
		this.decBtn = this.parent.querySelector('button.decrement-button');
		this.qty = this.parent.querySelector('.quantity');
		this.incBtn = this.parent.querySelector('button.increment-button');
	}

	update() {
		this.qty.textContent = STATE.currentProduct.selectedQty;
	}

	updateQtyBtns() {
		const selectedQty = STATE.currentProduct.selectedQty;
		this.decBtn.disabled = false;
		this.incBtn.disabled = false;
		if (selectedQty === 0) this.decBtn.disabled = true;
		if (selectedQty === STATE.currentProduct.maxProductQty) this.incBtn.disabled = true;
	}

	addQtyBtnHandler(handler) {
		this.decBtn.addEventListener('click', handler);
		this.incBtn.addEventListener('click', handler);
	}
}
