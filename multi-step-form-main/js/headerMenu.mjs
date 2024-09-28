// import { DATA } from './data.mjs';
import { STATE } from './state.mjs';

export class HeaderMenu {
	constructor() {
		this.parent = document.querySelector('header');
		this.menuForm = this.parent.querySelector('.main-menu');
		this.buttons = Array.from(this.menuForm.elements);
		this.update();
	}

	addClickHandler(handler) {
		this.menuForm.addEventListener('change', handler);
	}

	update() {
		this.buttons.forEach((button) => {
			button.checked = Number(button.dataset.index) === STATE.currentPageIndex ? true : false;
			button.disabled = STATE.currentPageIndex === STATE.maxPageIndex ? true : false;
		});
	}
}

// export default new HeaderHMenu();
