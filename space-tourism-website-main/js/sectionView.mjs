import { STATE } from './state.mjs';

export class SectionView {
	constructor(selector) {
		this.title = selector.slice(1).toLowerCase();
		this.parent = document.querySelector(selector);
		STATE.sections.push(this);
	}

	hide() {
		this.parent.classList.add('hidden');
	}

	show() {
		this.parent.classList.remove('hidden');
	}
}
