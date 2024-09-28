import { STATE } from './state.mjs';

export class FooterMenu {
	constructor() {
		this.parent = document.querySelector('footer');
		this.menu = this.parent.querySelector('menu');
		this.goBackBtn = this.menu.querySelector('.left-button');
		this.nextStepBtn = this.menu.querySelector('.right-button');
		this.update();
	}

	addClickHandler(handler) {
		this.goBackBtn.addEventListener('click', handler);
		this.nextStepBtn.addEventListener('click', handler);
	}

	hideButton(button) {
		button.classList.add('hidden');
	}

	showButton(button) {
		button.classList.remove('hidden');
	}

	update() {
		if (STATE.currentPageIndex === 1) {
			this.hideButton(this.goBackBtn);
		} else this.showButton(this.goBackBtn);

		if (STATE.currentPageIndex === STATE.maxPageIndex - 1) {
			this.nextStepBtn.textContent = 'Confirm';
			this.nextStepBtn.style.backgroundColor = 'var(--Purplish-blue)';
		} else {
			this.nextStepBtn.textContent = 'Next Step';
			this.nextStepBtn.style.backgroundColor = 'var(--Marine-blue)';
		}

		if (STATE.currentPageIndex === STATE.maxPageIndex) {
			this.hideButton(this.goBackBtn);
			this.hideButton(this.nextStepBtn);
		}
	}
}

// export default new HeaderHMenu();
