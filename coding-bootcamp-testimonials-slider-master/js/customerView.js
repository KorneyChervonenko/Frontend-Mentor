class CustomerView {
	portrait = document.getElementById('portrait');
	review = document.getElementById('review');
	customerName = document.getElementById('customer-name');
	occupation = document.getElementById('occupation');

	update(customer) {
		this.portrait.src = customer.photo;
		this.review.textContent = `“ ${customer.review} ”`;
		this.customerName.textContent = customer.name;
		this.occupation.textContent = customer.occupation;
	}
}

export default new CustomerView();
