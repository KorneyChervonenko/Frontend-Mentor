// export const DATA = new Set();

export const STATE = {
	maxProductQty: 99,
	currentProduct: {
		images: [
			{
				thumbnail: './images/image-product-1-thumbnail.jpg',
				full: './images/image-product-1.jpg',
			},

			{
				thumbnail: './images/image-product-2-thumbnail.jpg',
				full: './images/image-product-2.jpg',
			},

			{
				thumbnail: './images/image-product-3-thumbnail.jpg',
				full: './images/image-product-3.jpg',
			},

			{
				thumbnail: './images/image-product-4-thumbnail.jpg',
				full: './images/image-product-4.jpg',
			},
		],

		brand: 'Sneaker Company',
		name: 'Fall Limited Edition Sneakers',
		description:
			'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
		priceNew: 125,
		priceOld: 250,
		discount: 50,
		inCart: 0,
		selectedQty: 3,
		currentImgIndex: 0,
	},
};
