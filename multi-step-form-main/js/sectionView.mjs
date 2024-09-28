import { STATE } from './state.mjs';

export class SectionView {
	constructor(selector) {
		this.parent = document.querySelector(`main > ${selector}`);
		this.selector = selector;
	}

	hide() {
		this.parent.classList.add('hidden');
	}

	show() {
		this.parent.classList.remove('hidden');
	}
}

// export default new HeaderHMenu();
