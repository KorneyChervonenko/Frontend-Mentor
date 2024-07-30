import { getCurrencyFormatted } from './helpers.mjs';

export class Dessert {
	thresholdWidth = getComputedStyle(document.documentElement).getPropertyValue('--threshold-width');

	constructor(dessertData) {
		this.imgThumbnail = dessertData.image.thumbnail;
		this.imgMobile = dessertData.image.mobile;
		this.imgTablet = dessertData.image.tablet;
		this.imgDesktop = dessertData.image.desktop;
		this.name = dessertData.name;
		this.category = dessertData.category;
		this.price = dessertData.price;
		this.inCart = 0;
	}

	addCtrlBtnHandler(handler) {
		this.menuItemAddToCartBtn.addEventListener('click', (event) => handler(event, this));
		this.menuItemDecBtn.addEventListener('click', (event) => handler(event, this));
		this.menuItemIncBtn.addEventListener('click', (event) => handler(event, this));
	}

	generateMenuItemHTML() {
		const markup = `
            <section class="dessert">
                <picture>
                    <source srcset=${this.imgMobile} media="(width < ${this.thresholdWidth})" />
                    <source srcset=${this.imgDesktop} media="(width >= ${this.thresholdWidth})" />
                    <img src=${this.imgThumbnail} alt="dessert" />
                </picture>
                <div class="control-button">
                    <button type="button" class="add-to-cart #hidden">
                        <img src="./assets/images/icon-add-to-cart.svg" alt="" />Add to Cart
                    </button>
                    <div class="quantity-selector hidden">
                        <button type="button" class="decrement-button">
                            <img src="./assets/images/icon-decrement-quantity.svg" alt="" />
                        </button>
                        <span class="quantity"></span>
                        <button type="button" class="increment-button">
                            <img src="./assets/images/icon-increment-quantity.svg" alt="" />
                        </button>
                    </div>
                </div>
                <p class="dessert-category">${this.category}</p>
                <p class="dessert-name">${this.name}</p>
                <p class="dessert-price">${getCurrencyFormatted(this.price)}</p>
            </section>
        `;
		return markup;
	}

	generateCartItemHTML() {
		const markup = `
			<li class="cart-item">
				<div class="cart-item-info">
					<p class="cart-item-name">${this.name}</p>
					<div class="cart-item-qty-price-sum">
						<span class="cart-item-qty">${this.inCart}x</span>
						<span class="cart-item-price">@ ${getCurrencyFormatted(this.price)}</span>
						<span class="cart-item-sum">${getCurrencyFormatted(this.inCart * this.price)}</span>
					</div>
				</div>
				<button type="button" class="cart-remove-item-btn">
					<img src="assets/images/icon-remove-item.svg" alt="" />
				</button>
			</li>
	`;
		return markup;
	}

	decreaseQtyInCart() {
		this.inCart = Math.max(0, this.inCart - 1);
	}

	increaseQtyInCart() {
		this.inCart++;
	}

	MenuItemCtrlBtnSwitchToAddToCart() {
		this.menuItemAddToCartBtn.classList.remove('hidden');
		this.menuItemQtySelector.classList.add('hidden');
	}

	MenuItemCtrlBtnSwitchToQtySelector() {
		this.menuItemAddToCartBtn.classList.add('hidden');
		this.menuItemQtySelector.classList.remove('hidden');
	}

	updateMenuItemCtrlBtn() {
		this.qtyInCartIndicator.textContent = this.inCart;

		if (this.inCart === 0) {
			this.MenuItemCtrlBtnSwitchToAddToCart();
			this.menuItemPicture.style.borderStyle = 'none';
		} else {
			this.MenuItemCtrlBtnSwitchToQtySelector();
			this.menuItemPicture.style.borderStyle = 'solid';
		}
	}

	renderMenuItem(dessertMenuView) {
		const markup = this.generateMenuItemHTML();
		dessertMenuView.menuElement.insertAdjacentHTML('afterbegin', markup);
		this.menuItem = dessertMenuView.menuElement.querySelector('.dessert');
		this.menuItemPicture = this.menuItem.querySelector('picture');
		this.menuItemCtrlBtn = this.menuItem.querySelector('.control-button');

		this.menuItemAddToCartBtn = this.menuItemCtrlBtn.querySelector('.add-to-cart');
		this.menuItemQtySelector = this.menuItemCtrlBtn.querySelector('.quantity-selector');
		this.menuItemDecBtn = this.menuItemQtySelector.querySelector('.decrement-button');
		this.menuItemIncBtn = this.menuItemQtySelector.querySelector('.increment-button');
		this.qtyInCartIndicator = this.menuItemQtySelector.querySelector('.quantity');
	}

	renderCartItem(cartView) {
		const markup = this.generateCartItemHTML();
		cartView.itemsInCartList.insertAdjacentHTML('afterbegin', markup);
		this.cartItem = cartView.itemsInCartList.querySelector('.cart-item');
		this.cartItemQty = this.cartItem.querySelector('.cart-item-qty');
		this.cartItemSum = this.cartItem.querySelector('.cart-item-sum');
		this.removeCartItemBtn = this.cartItem.querySelector('.cart-remove-item-btn');
	}

	updateCartItem() {
		this.cartItemQty.textContent = this.inCart + 'x';
		this.cartItemSum.textContent = getCurrencyFormatted(this.inCart * this.price);
	}
}
