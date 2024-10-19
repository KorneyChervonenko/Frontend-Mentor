import './DessertMenu.scss';

import { DessertMenuItem } from './DessertMenuItem.jsx';

export function DessertMenu({ desserts, onPlusToCart, onMinusFromCart, isOrderCompleted }) {
	return (
		<ul className="desert-list">
			{desserts.map((dessert, index) => (
				<DessertMenuItem
					dessert={dessert}
					onPlusToCart={onPlusToCart}
					onMinusFromCart={onMinusFromCart}
					isOrderCompleted={isOrderCompleted}
					key={index}
				/>
			))}
		</ul>
	);
}
