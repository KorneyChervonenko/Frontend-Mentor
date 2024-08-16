'use strict';
// console.clear();
// console.log('script.js running...');

import { STATE } from './config.mjs';
import { ShowRoomMobile } from './showroom-mobile.mjs';
import { ShowRoomDesktop } from './showroom-desktop.mjs';
import { LightBox } from './lightbox.mjs';
import { ProductInfo } from './product-info.mjs';
import { QtySelector } from './qty-selector.mjs';
import { AddToCart } from './add-to-cart.mjs';
import { CartButton } from './cart-btn.mjs';
import { Cart } from './cart.mjs';

function arrowBtnHandler(event) {
	let currentImgIndex = STATE.currentProduct.currentImgIndex;
	switch (event.currentTarget.ariaLabel) {
		case 'previous image':
			// console.log('previous image pressed');
			currentImgIndex = Math.max(0, currentImgIndex - 1);
			break;

		case 'next image':
			// console.log('next image pressed');
			currentImgIndex = Math.min(STATE.currentProduct.images.length - 1, currentImgIndex + 1);
			break;
	}
	STATE.currentProduct.currentImgIndex = currentImgIndex;
	showRoomDesktopView.update();
	showRoomMobileView.update();
	showRoomMobileView.updateArrowBtns();
	lightBoxView.update();
	lightBoxView.updateArrowBtns();
}

function previewBtnHandler(event) {
	STATE.currentProduct.currentImgIndex = Number(event.currentTarget.dataset.btnIndex);
	showRoomDesktopView.update();
	showRoomMobileView.update();
	showRoomMobileView.updateArrowBtns();
	lightBoxView.update();
	lightBoxView.updateArrowBtns();
}

function lightBoxcloseBtnHandler(event) {
	lightBoxView.hide();
}

function QtyBtnHandler(event) {
	let selectedQty = STATE.currentProduct.selectedQty;
	switch (event.currentTarget.ariaLabel) {
		case 'decrement quantity':
			// console.log('decrement quantity pressed');
			selectedQty = Math.max(0, selectedQty - 1);
			break;

		case 'increment quantity':
			// console.log('increment quantity');
			selectedQty = Math.min(STATE.maxProductQty, selectedQty + 1);
			break;
	}
	STATE.currentProduct.selectedQty = selectedQty;
	qtySelectorView.update();
	qtySelectorView.updateQtyBtns();
	addToCartView.update();
}

function addToCartHandler(event) {
	STATE.currentProduct.inCart = Math.min(
		STATE.maxProductQty,
		STATE.currentProduct.inCart + STATE.currentProduct.selectedQty
	);
	STATE.currentProduct.selectedQty = 0;
	qtySelectorView.update();
	qtySelectorView.updateQtyBtns();
	cartToggleBtnView.update();
	cartView.update();
	// console.log('in cart:', STATE.currentProduct.inCart);
}

function cartToggleBtnHandler(event) {
	cartView.toggle();
}

function clearCartBtnHandler(event) {
	STATE.currentProduct.inCart = 0;
	cartView.update();
	cartToggleBtnView.update();
}

function fullImgBtnHandler(event) {
	lightBoxView.show();
}

const showRoomMobileView = new ShowRoomMobile();
const showRoomDesktopView = new ShowRoomDesktop();
const productInfoView = new ProductInfo();
const lightBoxView = new LightBox();
const qtySelectorView = new QtySelector();
const addToCartView = new AddToCart();
const cartToggleBtnView = new CartButton();
const cartView = new Cart();

window.addEventListener('load', (event) => {
	// console.log('page is fully loaded');
	showRoomMobileView.update();
	showRoomMobileView.updateArrowBtns();
	showRoomMobileView.addArrowBtnHandler(arrowBtnHandler);

	showRoomDesktopView.renderGallery();
	showRoomDesktopView.update();
	showRoomDesktopView.addPreviewBtnHandler(previewBtnHandler);
	showRoomDesktopView.addFullImgBtnHandler(fullImgBtnHandler);

	productInfoView.update(STATE.currentProduct);

	lightBoxView.renderGallery();
	lightBoxView.update();
	lightBoxView.updateArrowBtns();
	lightBoxView.addArrowBtnHandler(arrowBtnHandler);
	lightBoxView.addPreviewBtnHandler(previewBtnHandler);
	lightBoxView.addCloseBtnHandler(lightBoxcloseBtnHandler);

	qtySelectorView.addQtyBtnHandler(QtyBtnHandler);
	qtySelectorView.update();

	addToCartView.addClickHandler(addToCartHandler);
	addToCartView.update();
	qtySelectorView.updateQtyBtns();

	cartToggleBtnView.addClickHandler(cartToggleBtnHandler);
	cartToggleBtnView.update();

	cartView.addClearCartBtnHandler(clearCartBtnHandler);
});
