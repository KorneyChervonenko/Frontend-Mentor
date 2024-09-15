import { DATA } from './data.mjs';
import { STATE } from './state.mjs';

export class HeaderMenu {
	constructor(selector) {
		this.parent = document.querySelector(selector);
		this.menu = this.parent.querySelector('ol');
		// this.menu.style.backgroundColor = 'aqua';
		this.renderMenu();
	}

	addClickHandler(handler) {
		this.parent.addEventListener('click', handler);
	}

	renderMenu() {
		const menuItems = STATE.sections.map((section) => section.title);
		this.menu.innerHTML = '';

		menuItems.forEach((menuItem, index) => {
			const menuItemHTML = `<li role="menuitem" data-index = "${index}">${menuItem.toUpperCase()}</li>`;
			this.menu.insertAdjacentHTML('beforeend', menuItemHTML);
		});
	}
}

// export default new HeaderHMenu();
