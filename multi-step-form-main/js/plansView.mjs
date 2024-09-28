import { STATE } from './state.mjs';
import { SectionView } from './sectionView.mjs';

export class PlansView extends SectionView {
	constructor() {
		super('.plans');
		this.form = this.parent.querySelector('form.plan-form');
		this.periodSwitch = this.parent.querySelector('.period-switch input[type="checkbox"]');
	}

	addCheckHandler(handler) {
		this.periodSwitch.addEventListener('change', handler);
	}

	// update() {}
}
