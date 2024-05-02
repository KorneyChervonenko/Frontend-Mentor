'use strict';
console.clear();
console.log('script is running...');

const monthPriceData = [
	{ views: '10K', monthPrice: 8 },
	{ views: '50K', monthPrice: 12 },
	{ views: '100K', monthPrice: 16 },
	{ views: '500K', monthPrice: 24 },
	{ views: '1M', monthPrice: 36 },
];

class App {
	slider = document.querySelector('.order-volume > input[type="range"]');
	toggler = document.querySelector('.billing-type > label > input[type="checkbox"]');
	pageViewsField = document.querySelector('.order-volume > span:first-of-type');
	priceField = document.querySelector('.order-volume > span:last-of-type');

	constructor(priceList) {
		this.priceList = priceList;
		this.slider.max = this.priceList.length - 1;
		this.slider.value = Math.trunc(this.priceList.length / 2);

		this.slider.addEventListener('input', this.displayInfo.bind(this));
		this.toggler.addEventListener('change', this.displayInfo.bind(this));

		this.displayInfo();
	}

	displayInfo(event) {
		const selectedData = this.priceList.at(this.slider.value);
		const price = this.toggler.checked ? selectedData.monthPrice * 12 * 0.75 : selectedData.monthPrice;
		this.pageViewsField.textContent = `${selectedData.views} PAGEVIEWS`;
		this.priceField.innerHTML = `<b>${price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</b> /${[
			'month',
			'year',
		].at(Number(this.toggler.checked))}`;
	}
}

const newApp = new App(monthPriceData);
