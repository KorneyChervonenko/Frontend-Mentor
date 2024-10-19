import './App.scss';
import { useState } from 'react';
import { DessertMenu } from './DessertMenu.jsx';
import { ShoppingCart } from './ShoppingCart.jsx';
import { Success } from './Success.jsx';
import DESSERTS from './data.mjs';

export default function App() {
	const [desserts, setItems] = useState([...DESSERTS]);
	const [isOrderCompleted, setOrderStatus] = useState(false);

	function handleOrderStatusChange(status) {
		setOrderStatus(status);
	}

	function handlePlusToCart(selectedDessert) {
		setItems((desserts) =>
			desserts.map((dessert) => (dessert === selectedDessert ? { ...dessert, inCart: dessert.inCart + 1 } : dessert))
		);
	}

	function handleMinusFromCart(selectedDessert) {
		setItems((desserts) =>
			desserts.map((dessert) =>
				dessert === selectedDessert ? { ...dessert, inCart: Math.max(0, dessert.inCart - 1) } : dessert
			)
		);
	}

	function handleRemoveFromCart(selectedDessert) {
		setItems((desserts) => desserts.filter((dessert) => dessert !== selectedDessert));
	}

	function handleResetCart() {
		setItems([...DESSERTS]);
	}

	return (
		<main className="App">
			<h1>Desserts</h1>
			<DessertMenu
				desserts={desserts}
				onPlusToCart={handlePlusToCart}
				onMinusFromCart={handleMinusFromCart}
				isOrderCompleted={isOrderCompleted}
			/>
			<ShoppingCart
				desserts={desserts}
				onRemoveFromCart={handleRemoveFromCart}
				isOrderCompleted={isOrderCompleted}
				onOrderStatusChange={handleOrderStatusChange}
			/>
			<Success
				desserts={desserts}
				isOrderCompleted={isOrderCompleted}
				onOrderStatusChange={handleOrderStatusChange}
				onResetCart={handleResetCart}
			/>
		</main>
	);
}
