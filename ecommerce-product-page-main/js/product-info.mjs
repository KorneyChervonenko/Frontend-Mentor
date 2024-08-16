import { STATE } from './config.mjs';
import { getCurrencyFormatted } from './helpers.mjs';

export class ProductInfo {
	constructor() {
		this.parent = document.querySelector('.product-info');
		this.brand = this.parent.querySelector('.brand');
		this.name = this.parent.querySelector('.name');
		this.description = this.parent.querySelector('.description');
		this.priceNew = this.parent.querySelector('.new-price');
		this.discount = this.parent.querySelector('.discount');
		this.priceOld = this.parent.querySelector('.old-price');
	}

	update(product) {
		this.brand.textContent = product.brand;
		this.name.textContent = product.name;
		this.description.textContent = product.description;
		this.priceNew.textContent = getCurrencyFormatted(product.priceNew);
		this.discount.textContent = `${product.discount}%`;
		this.priceOld.textContent = getCurrencyFormatted(product.priceOld);
	}
}
