import { getCurrencyFormatted } from '../js/helpers.mjs';
import './OrderedItem.scss';

export function OrderedItem({ dessert }) {
	const { name, price, inCart, image } = dessert;
	return (
		<li className="ordered-item">
			<img src={image.thumbnail} alt="dessert" />
			<div className="ordered-item-info">
				<p className="ordered-item-name">{name}</p>
				<div className="ordered-item-qty-price">
					<span className="ordered-item-qty">{inCart}x</span>
					<span className="ordered-item-price">@ {getCurrencyFormatted(price)}</span>
				</div>
			</div>
			<span className="ordered-item-sum">{getCurrencyFormatted(inCart * price)}</span>
		</li>
	);
}
