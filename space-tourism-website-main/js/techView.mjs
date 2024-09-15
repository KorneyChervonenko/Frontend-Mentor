import { DATA } from './data.mjs';
import { STATE } from './state.mjs';
import { SectionView } from './sectionView.mjs';
import { capitalize } from './helpers.mjs';

export class TechView extends SectionView {
	constructor() {
		super('.technology');
		console.log('TechView created');

		this.techPict = this.parent.querySelector('.tech-image');
		this.techPictLandscape = this.techPict.querySelector('source:first-of-type');
		this.techPictLandscape.media = '(max-width: 90rem)';

		this.techPictPortrait = this.techPict.querySelector('source:last-of-type');
		this.techPictPortrait.media = '(min-width: 90rem)';

		this.techPictImg = this.techPict.querySelector('img');

		this.techInfo = this.parent.querySelector('article');
		this.techName = this.techInfo.querySelector('h2');
		this.techDescription = this.techInfo.querySelector('p');

		this.techMenu = this.parent.querySelector('.term-menu');

		this.renderTechMenu();
		this.update();
	}

	update() {
		const tech = DATA.technology.at(STATE.currentTechIndex);

		this.techPictLandscape.srcset = tech.images.landscape;
		this.techPictPortrait.srcset = tech.images.portrait;
		this.techPictImg.src = tech.images.portrait;

		this.techName.textContent = tech.name.toUpperCase();
		this.techDescription.textContent = tech.description;
	}

	addMenuHandler(handler) {
		this.techMenu.addEventListener('change', handler);
	}

	renderTechMenu() {
		this.techMenu.innerHTML = '';
		DATA.technology.forEach((term, index) => {
			const menuItemHTML = `
				<input 
					type="radio" 
					data-index="${index}" 
					name="term" 
					value="${capitalize(term.name)}"
					title="${capitalize(term.name)}" 
					${index === STATE.currentTechIndex ? 'checked' : ''}
				/>
			`;
			this.techMenu.insertAdjacentHTML('beforeend', menuItemHTML);
		});
	}
}

// export default new DestinationsView();
