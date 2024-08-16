import { STATE } from './config.mjs';
import { ShowRoomBase } from './showroom-base.mjs';

export class ShowRoomMobile extends ShowRoomBase {
	constructor(parentSelector = '.showroom-mobile') {
		super(parentSelector);

		this.prevBtn = this.parent.querySelector('.prev-btn');
		this.nextBtn = this.parent.querySelector('.next-btn');
	}

	updateArrowBtns() {
		const currentImgIndex = STATE.currentProduct.currentImgIndex;
		this.prevBtn.disabled = false;
		this.nextBtn.disabled = false;
		if (currentImgIndex === 0) this.prevBtn.disabled = true;
		if (currentImgIndex === STATE.currentProduct.images.length - 1) this.nextBtn.disabled = true;
	}

	addArrowBtnHandler(handler) {
		this.prevBtn.addEventListener('click', handler);
		this.nextBtn.addEventListener('click', handler);
	}
}
