import { getCurrencyFormatted } from './helpers.mjs';

class ResultView {
	constructor() {
		this.phase1 = document.querySelector('.phase-1');
		this.phase2 = document.querySelector('.phase-2');
		this.monthlyRepaymentElement = document.getElementById('monthly-repayment');
		this.totalRepaymentElement = document.getElementById('total-repayment');
	}

	switchToPhase2() {
		this.phase1.classList.add('hidden');
		this.phase2.classList.remove('hidden');
	}

	switchToPhase1() {
		this.phase2.classList.add('hidden');
		this.phase1.classList.remove('hidden');
	}

	showResults(results) {
		this.monthlyRepaymentElement.textContent = getCurrencyFormatted(results.monthlyRepayments);
		this.totalRepaymentElement.textContent = getCurrencyFormatted(results.totalRepayments);
		this.switchToPhase2();
	}
}

const resultView = new ResultView();
export { resultView };
