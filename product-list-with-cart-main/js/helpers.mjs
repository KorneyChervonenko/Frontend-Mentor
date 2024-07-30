export function getCurrencyFormatted(money) {
	return money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function getCartData(data) {
	let itemsInCartQty = 0;
	let totalSum = 0;
	data.forEach((dessert) => {
		// console.log(dessert.name);
		if (Boolean(dessert.inCart)) {
			itemsInCartQty += dessert.inCart;
			totalSum += dessert.inCart * dessert.price;
		}
	});
	// console.log('items In Cart:', itemsInCart);
	// console.log('total sum:', totalSum);
	return { itemsInCartQty, totalSum };
}

{
	// console.log(getCurrencyFormatted(100.0000000000001));
	// console.log(getCurrencyFormatted(102.0000000000001));
	// console.log(getCurrencyFormatted(0.01));
}
