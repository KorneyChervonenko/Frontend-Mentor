import { getCurrencyFormatted, getCartData } from './helpers.mjs';
import { DATA } from './config.mjs';

export class CartView {
	constructor() {
		this.cart = document.querySelector('.shopping-cart');
		this.itemsInCartList = this.cart.querySelector('.items-in-cart-list');
		this.itemsInCartQty = this.cart.querySelector('.items-cart-counter');
		this.cartEmpty = this.cart.querySelector('.shopping-cart-empty');
		this.cartFilled = this.cart.querySelector('.shopping-cart-filled');
		this.cartSumTotal = this.cartFilled.querySelector('.cart-sum-total');
		this.confirmBtn = this.cartFilled.querySelector('button[type="submit"]');
	}

	switchToEmpty() {
		this.cartEmpty.classList.remove('hidden');
		this.cartFilled.classList.add('hidden');
	}

	switchToFilled() {
		this.cartEmpty.classList.add('hidden');
		this.cartFilled.classList.remove('hidden');
	}

	update() {
		const { itemsInCartQty, totalSum } = getCartData(DATA);
		console.log('cart update called');
		console.log(itemsInCartQty, totalSum);

		this.itemsInCartQty.textContent = itemsInCartQty;
		this.cartSumTotal.textContent = getCurrencyFormatted(totalSum);

		if (itemsInCartQty) {
			this.switchToFilled();
		} else {
			this.switchToEmpty();
		}
	}

	disable() {
		this.cart.disabled = true;
	}
	enable() {
		this.cart.disabled = false;
	}

	addConfirmBtnHandler(handler) {
		this.confirmBtn.addEventListener('click', handler);
	}
}

// const cartView = new CartView();
// export { cartView };
