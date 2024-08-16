import { STATE } from './config.mjs';

export class ShowRoomBase {
	constructor(parentSelector) {
		this.parent = document.querySelector(parentSelector);
		this.fullImg = this.parent.querySelector('img[alt="full product image"]');
	}

	update() {
		const currentImgIndex = STATE.currentProduct.currentImgIndex;
		this.fullImg.src = STATE.currentProduct.images[currentImgIndex].full;
	}
}
