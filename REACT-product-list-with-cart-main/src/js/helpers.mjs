export function getCurrencyFormatted(money) {
	return money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
