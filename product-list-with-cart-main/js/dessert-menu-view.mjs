// import { Dessert } from './dessert.mjs';

export class DessertMenuView {
	constructor() {
		this.menuElement = document.querySelector('.dessert-menu');
	}

	render(data) {
		data.forEach((dessert) => {
			dessert.renderMenuItem(this);
		});
	}

	disable() {
		this.menuElement.disabled = true;
	}
	enable() {
		this.menuElement.disabled = false;
	}

	clear(data) {
		data.forEach((dessert) => {
			if (Boolean(dessert.inCart)) {
				dessert.cartItem.remove();
				dessert.inCart = 0;
				dessert.updateMenuItemCtrlBtn();
			}
		});
	}
}
