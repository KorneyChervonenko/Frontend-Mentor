// todo getValue => value

class View {
	constructor(parentElement) {
		this.parentElement = parentElement;
		this.errMsgField = this.parentElement.querySelector('.err-msg');
	}

	addHandler(eventType, handler) {
		this.inputField.addEventListener(eventType, handler.bind(this));
	}

	showError() {
		// generate error message according to validity
		let message = '';

		switch (true) {
			case this.validity.valueMissing:
				message = 'This field is required';
				break;

			case this.validity.badInput:
				message = 'Must be a number';
				break;

			case this.validity.rangeUnderflow:
				message = 'Must be larger';
				break;

			case this.validity.rangeOverflow:
				message = 'Must be smaller';
				break;

			default:
				message = 'Something wrong';
				break;
		}

		this.errMsgField.textContent = message;
		this.errMsgField.classList.remove('hidden');
	}

	hideError() {
		this.errMsgField.textContent = '';
		this.errMsgField.classList.add('hidden');
	}

	get getValue() {
		return Number(this.inputField.value);
	}

	get validity() {
		return this.inputField.validity;
	}
}

// export
class NumberView extends View {
	constructor(parentElement) {
		super(parentElement);
		this.inputField = this.parentElement.querySelector('.input-field').querySelector('input[type="number"]');
		this.inputFieldMark = this.parentElement.querySelector('.input-field').querySelector('.input-field-bgtext');
	}

	showError() {
		super.showError();
		this.inputFieldMark.style.backgroundColor = 'var(--input-field-mark-color-invalid)';
	}

	hideError() {
		super.hideError();
		this.inputFieldMark.style.backgroundColor = 'var(--input-field-mark-color)';
	}
}

// export
class RadioView extends View {
	constructor(parentElement) {
		super(parentElement);
		this.inputFields = parentElement.querySelectorAll('input[type="radio"]');
		this.inputField = this.inputFields[0];
	}

	get getValue() {
		const checkedField = [...this.inputFields].filter((inputField) => inputField.checked).at(0);
		return checkedField ? checkedField.value : undefined;
	}
}

const amountView = new NumberView(document.querySelector('.amount'));
const termView = new NumberView(document.querySelector('.term'));
const rateView = new NumberView(document.querySelector('.rate'));
const typeView = new RadioView(document.querySelector('.type'));
export { amountView, termView, rateView, typeView };
