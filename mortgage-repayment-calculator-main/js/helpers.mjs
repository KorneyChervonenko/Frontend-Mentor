export function getCurrencyFormatted(money) {
	return money.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
}

{
	// console.log(getCurrencyFormatted(100.0000000000001));
	// console.log(getCurrencyFormatted(102.0000000000001));
	// console.log(getCurrencyFormatted(0.01));
}
