import { STATE } from './config.mjs';
import { ShowRoomBase } from './showroom-base.mjs';

export class ShowRoomDesktop extends ShowRoomBase {
	constructor(parentSelector = '.showroom-desktop') {
		super(parentSelector);

		this.previewGallery = this.parent.querySelector('.preview-gallery');
	}

	update() {
		super.update();
		const currentImgIndex = STATE.currentProduct.currentImgIndex;
		this.previewBtns.forEach((preview, index) => {
			preview.classList.remove('selected');
		});
		this.previewBtns[currentImgIndex].classList.add('selected');
	}

	getPreviewBtnsHTML() {
		let previewBtnsHTML = '';
		STATE.currentProduct.images.forEach((image, index) => {
			previewBtnsHTML += `
			    <li>
			        <button type="button" class="preview" data-btn-index=${index}>
			            <img src="${image.thumbnail}" alt="product preview image" />
			        </button>
			    </li>
			`;
		});
		return previewBtnsHTML;
	}

	renderGallery() {
		const previewBtnsHTML = this.getPreviewBtnsHTML();
		this.previewGallery.innerHTML = '';
		this.previewGallery.insertAdjacentHTML('afterbegin', previewBtnsHTML);
		this.previewBtns = this.previewGallery.querySelectorAll('button.preview');
	}

	addPreviewBtnHandler(handler) {
		this.previewBtns.forEach((btn) => btn.addEventListener('click', handler));
	}

	addFullImgBtnHandler(handler) {
		this.fullImg.addEventListener('click', handler);
	}
}
