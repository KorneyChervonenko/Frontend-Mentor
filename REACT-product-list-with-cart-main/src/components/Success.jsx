import { getCurrencyFormatted } from '../js/helpers.mjs';
import { OrderedItem } from './OrderedItem.jsx';
import './Success.scss';

export function Success({ desserts, isOrderCompleted, onOrderStatusChange, onResetCart }) {
	const dessertsInCart = desserts.filter((dessert) => dessert.inCart > 0);
	const totalSum = dessertsInCart.reduce((sum, dessert) => sum + dessert.inCart * dessert.price, 0);

	return (
		<section className={`success ${isOrderCompleted ? '' : 'hidden'}`}>
			<img src="/assets/images/icon-order-confirmed.svg" alt="check mark" />
			<h2>Order Confirmed</h2>
			<p>We hope you enjoy your food!</p>
			<ul className="order-list">
				{dessertsInCart.map((dessert, index) => (
					<OrderedItem dessert={dessert} key={index} />
				))}
			</ul>
			<div className="order-total">
				<span>Order Total</span>
				<span className="order-sum-total">{getCurrencyFormatted(totalSum)}</span>
			</div>
			<button
				type="reset"
				onClick={() => {
					onResetCart();
					onOrderStatusChange(false);
				}}
			>
				Start New Order
			</button>
		</section>
	);
}
