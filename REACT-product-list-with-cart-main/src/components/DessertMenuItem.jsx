import { getCurrencyFormatted } from '../js/helpers.mjs';
import vars from '../styles/_vars.scss';
import './DessertMenuItem.scss';

export function DessertMenuItem({ dessert, onPlusToCart, onMinusFromCart, isOrderCompleted }) {
	const { image, name, category, price } = dessert;

	// const thresholdWidth = getComputedStyle(document.documentElement).getPropertyValue('--threshold-width');
	return (
		<li className="dessert-item">
			<picture>
				<source srcSet={image.mobile} media={`(width < ${vars.thresholdWidth})`} />
				<source srcSet={image.desktop} media={`(width >= ${vars.thresholdWidth})`} />

				{/* <source srcSet="./assets/images/image-baklava-mobile.jpg" media="(width < 45rem)" />
				<source srcSet="./assets/images/image-baklava-desktop.jpg" media="(width >= 45rem)" /> */}

				<img src={image.thumbnail} alt={name} className={`${dessert.inCart === 0 ? '' : 'orange-border'}`} />
			</picture>

			<form className={`control-button ${isOrderCompleted ? 'disabled' : ''}`}>
				<button
					type="button"
					className={`add-to-cart ${dessert.inCart === 0 ? '' : 'hidden'}`}
					onClick={() => onPlusToCart(dessert)}
				>
					<img src="./assets/images/icon-add-to-cart.svg" alt="" />
					Add to Cart
				</button>
				<div className={`quantity-selector ${dessert.inCart === 0 ? 'hidden' : ''}`}>
					<button type="button" className="decrement-button" onClick={() => onMinusFromCart(dessert)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
							<path fill="white" d="M0 .375h10v1.25H0V.375Z" />
						</svg>
					</button>
					<span className="quantity">{dessert.inCart}</span>
					<button type="button" className="increment-button" onClick={() => onPlusToCart(dessert)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
							<path fill="white" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
						</svg>
					</button>
				</div>
			</form>
			<p className="dessert-category">{category}</p>
			<p className="dessert-name">{name}</p>
			<p className="dessert-price">{getCurrencyFormatted(price)}</p>
		</li>
	);
}
