import { getCurrencyFormatted, getCartData } from './helpers.mjs';
// import { DATA } from './config.mjs';

export class SuccessView {
	constructor() {
		this.successWindow = document.querySelector('.success');
		this.orderList = this.successWindow.querySelector('.order-list');
		this.orderSumTotal = this.successWindow.querySelector('.order-sum-total');
		this.startNewOrderBtn = this.successWindow.querySelector('button');
	}

	show() {
		this.successWindow.classList.remove('hidden');
	}

	hide() {
		this.successWindow.classList.add('hidden');
	}

	generateOrderItemHTML(dessert) {
		const markup = `
			<li class="order-item">
				<img src=${dessert.imgThumbnail} alt="" />
				<div class="order-item-info">
					<p class="order-item-name">${dessert.name}</p>
					<div class="order-item-qty-price">
						<span class="order-item-qty">${dessert.inCart}x</span>
						<span class="order-item-price">@ ${getCurrencyFormatted(dessert.price)}</span>
					</div>
				</div>
				<span class="order-item-sum">${getCurrencyFormatted(dessert.inCart * dessert.price)}</span>
			</li>
        `;
		return markup;
	}

	render(data) {
		let totalSum = 0;
		data.forEach((dessert) => {
			if (Boolean(dessert.inCart)) {
				totalSum += dessert.inCart * dessert.price;
				const markup = this.generateOrderItemHTML(dessert);
				this.orderList.insertAdjacentHTML('afterbegin', markup);
			}
		});

		this.orderSumTotal.textContent = getCurrencyFormatted(totalSum);
	}

	clear() {
		this.orderList.innerHTML = '';
		this.orderSumTotal.textContent = getCurrencyFormatted(0);
	}

	addStartNewOrderBtnHandler(handler) {
		this.startNewOrderBtn.addEventListener('click', handler);
	}

	scrollIntoView() {
		this.successWindow.scrollIntoView({ behavior: 'smooth' });
	}
}

// const successView = new SuccessView();
// export { successView };
