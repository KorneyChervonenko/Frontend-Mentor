// import { amountView, termView, rateView, typeView } from './js/input-views.mjs';
// import { resultView } from './js/result-view.mjs';
// import { mortgageCalculator } from './js/calculator.mjs';
// // import { getCurrencyFormatted } from './js/helpers.mjs';
import { amountView, termView, rateView, typeView } from './input-views.mjs';
import { resultView } from './result-view.mjs';
import { mortgageCalculator } from './calculator.mjs';
// import { getCurrencyFormatted } from './js/helpers.mjs';

// 'use strict';
console.clear();
console.log('script started');

const inputViews = [amountView, termView, rateView, typeView];
const inputForm = document.getElementById('data-form');

inputForm.addEventListener('reset', (event) => {
	resultView.switchToPhase1();
	inputViews.forEach((inputView) => inputView.hideError());
});

inputForm.addEventListener('submit', (event) => {
	event.preventDefault();

	if (inputForm.checkValidity()) {
		// calc results and display them
		resultView.showResults(
			mortgageCalculator(amountView.getValue, rateView.getValue, termView.getValue, typeView.getValue)
		);
	} else {
		/// display errors
		console.log('something wrong');
		inputViews.filter((inputView) => !inputView.validity.valid).map((invalidInputView) => invalidInputView.showError());
	}
});

inputViews.forEach((inputView) => {
	inputView.addHandler('click', inputView.hideError);
});

resultView.switchToPhase1();
