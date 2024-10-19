import { ShoppingCartItem } from './ShoppingCartItem.jsx';
import { getCurrencyFormatted } from '../js/helpers.mjs';
import './ShoppingCart.scss';

export function ShoppingCart({ desserts, onRemoveFromCart, isOrderCompleted, onOrderStatusChange }) {
	const dessertsInCart = desserts.filter((dessert) => dessert.inCart > 0);
	const numItemsInCart = dessertsInCart.reduce((sum, dessert) => sum + dessert.inCart, 0);
	const totalSum = dessertsInCart.reduce((sum, dessert) => sum + dessert.inCart * dessert.price, 0);

	return (
		<section className="shopping-cart">
			<h2>
				Your Cart (<span className="item-in-cart-number">{numItemsInCart}</span>)
			</h2>
			<div className={`cart-empty ${numItemsInCart > 0 ? 'hidden' : ''}`}>
				<img src="./assets/images/illustration-empty-cart.svg" alt="" />
				<p>Your added items will appear here</p>
			</div>

			<div className={`cart-filled ${numItemsInCart === 0 ? 'hidden' : ''}`}>
				<ul className="shopping-cart-list">
					{dessertsInCart.map((dessert, index) => (
						<ShoppingCartItem
							dessert={dessert}
							onRemoveFromCart={onRemoveFromCart}
							isOrderCompleted={isOrderCompleted}
							key={index}
						/>
					))}
				</ul>
				<div className="cart-total">
					<span>Order Total</span>
					<span className="cart-total-sum">{getCurrencyFormatted(totalSum)}</span>
				</div>
				<div className="carbon-neutral-promo">
					<img src="/assets/images/icon-carbon-neutral.svg" alt="" />
					<p>
						This is a <span>carbon-neutral</span> delivery
					</p>
				</div>
				<button
					type="submit"
					className={`${isOrderCompleted ? 'disabled' : ''}`}
					onClick={() => {
						onOrderStatusChange(true);
						window.scroll({
							top: 0,
							behavior: 'smooth',
						});
					}}
				>
					Confirm Order
				</button>
			</div>
		</section>
	);
}
