import { STATE } from './config.mjs';
import { getCurrencyFormatted } from './helpers.mjs';

export class Cart {
	constructor() {
		this.parent = document.querySelector('.shopping-cart');
		this.emptyCart = this.parent.querySelector('.cart-empty');
		this.filledCart = this.parent.querySelector('.cart-filled');
		this.clearCartBtn = this.parent.querySelector('.clear-cart-btn');
		this.productInCart = this.filledCart.querySelector('.product-in-cart');
		this.imgPreview = this.productInCart.querySelector('img[alt="product preview image"]');
		this.name = this.productInCart.querySelector('.name');
		this.calculation = this.productInCart.querySelector('.calculation');
		this.price = this.calculation.querySelector('.price');
		this.qty = this.calculation.querySelector('.qty');
		this.sum = this.calculation.querySelector('.sum');
		// this.clearCartBtn.style.backgroundColor = 'aqua';
	}

	toggle() {
		this.parent.classList.toggle('hidden');
	}

	update() {
		if (STATE.currentProduct.inCart === 0) {
			this.emptyCart.classList.remove('hidden');
			this.filledCart.classList.add('hidden');
		} else {
			this.emptyCart.classList.add('hidden');
			this.filledCart.classList.remove('hidden');
		}
		this.updateProductInCart();
	}

	updateProductInCart() {
		const product = STATE.currentProduct;
		this.imgPreview.src = product.images[0].thumbnail;
		this.name.textContent = product.name;
		this.price.textContent = getCurrencyFormatted(product.priceNew);
		this.qty.textContent = product.inCart;
		this.sum.textContent = getCurrencyFormatted(product.priceNew * product.inCart);
	}

	addClearCartBtnHandler(handler) {
		this.clearCartBtn.addEventListener('click', handler);
	}
}
