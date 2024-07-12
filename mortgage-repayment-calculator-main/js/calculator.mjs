// 'use strict';
// console.clear();
// console.log('script started');

export function mortgageCalculator(principalAmount, interestRate, termInYears, mortgageType) {
	console.log(principalAmount, interestRate, termInYears, mortgageType);
	let monthlyRepayments;
	let totalRepayments;
	const numberOfPayments = 12 * termInYears;
	const monthlyInterestRate = interestRate / 100 / 12;

	switch (mortgageType) {
		case 'interest-only':
			monthlyRepayments = principalAmount * monthlyInterestRate;
			totalRepayments = principalAmount + monthlyRepayments * numberOfPayments;
			break;

		case 'repayment':
			monthlyRepayments =
				(principalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
				(Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
			totalRepayments = numberOfPayments * monthlyRepayments;
			break;
	}

	// console.log({ monthlyRepayments, totalRepayments });
	return { monthlyRepayments, totalRepayments };
}
