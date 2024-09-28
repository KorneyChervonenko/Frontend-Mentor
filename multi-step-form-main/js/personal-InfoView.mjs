import { STATE } from './state.mjs';
import { SectionView } from './sectionView.mjs';

export class PersonalInfoView extends SectionView {
	constructor() {
		super('.personal-info');
		this.form = this.parent.querySelector('form');
		this.inputFields = Array.from(this.form.elements);
	}

	addInputHandler(handler) {
		this.inputFields.forEach((inputField) => inputField.addEventListener('input', handler));
	}

	showError(inputField, msg) {
		const errMsgID = inputField.getAttribute('aria-errormessage');
		const errMsg = document.getElementById(errMsgID);
		errMsg.textContent = msg;
		// add style
		inputField.classList.add('red-border');
	}

	hideError(inputField) {
		const errMsgID = inputField.getAttribute('aria-errormessage');
		const errMsg = document.getElementById(errMsgID);
		errMsg.textContent = '';
		// remove style
		inputField.classList.remove('red-border');
	}
}

// export default new HeaderHMenu();
