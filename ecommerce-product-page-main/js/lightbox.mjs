import { ShowRoomMobile } from './showroom-mobile.mjs';
import { ShowRoomDesktop } from './showroom-desktop.mjs';
import { aggregation } from './aggregation.mjs';

export class LightBox extends aggregation(ShowRoomMobile, ShowRoomDesktop) {
	constructor() {
		super('.lightbox-bg');
		this.closeBtn = this.parent.querySelector('.close-btn');
	}

	show() {
		this.parent.classList.remove('hidden');
		document.querySelector('main').classList.add('disabled');
		document.querySelector('header').classList.add('disabled');
	}

	hide() {
		this.parent.classList.add('hidden');
		document.querySelector('main').classList.remove('disabled');
		document.querySelector('header').classList.remove('disabled');
	}

	addCloseBtnHandler(handler) {
		this.closeBtn.addEventListener('click', handler);
	}
}
