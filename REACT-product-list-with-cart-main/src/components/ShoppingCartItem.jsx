import { getCurrencyFormatted } from '../js/helpers.mjs';
import './ShoppingCartItem.scss';

export function ShoppingCartItem({ dessert, onRemoveFromCart, isOrderCompleted }) {
	const { name, price, inCart } = dessert;
	return (
		<li className="dessert-in-cart">
			<div className="dessert-info">
				<p className="dessert-name">{name}</p> {/* Vanilla Bean Crème Brûlée */}
				<div className="cart-item-qty-price-sum">
					<span className="cart-item-qty">{inCart}x</span>
					<span className="cart-item-price">@ {getCurrencyFormatted(price)}</span>
					<span className="cart-item-sum">{getCurrencyFormatted(inCart * price)}</span>
				</div>
			</div>
			<button
				type="button"
				className={`${isOrderCompleted ? 'disabled' : ''}`}
				onClick={() => onRemoveFromCart(dessert)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
					<path
						fill="#CAAFA7"
						d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
					/>
				</svg>
			</button>
		</li>
	);
}
