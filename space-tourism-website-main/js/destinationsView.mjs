import { DATA } from './data.mjs';
import { STATE } from './state.mjs';
import { SectionView } from './sectionView.mjs';

export class DestinationsView extends SectionView {
	constructor() {
		super('.destinations');
		console.log('DestinationsView created');

		this.planetPict = this.parent.querySelector('.planet-image');
		this.planetPictSrc = this.planetPict.querySelector('source');
		this.planetPictImg = this.planetPict.querySelector('img');

		this.planetInfo = this.parent.querySelector('.planet');
		this.planetName = this.planetInfo.querySelector('.name');
		this.planetDescription = this.planetInfo.querySelector('.description');
		this.planetData = this.planetInfo.querySelector('.data');
		this.planetDistance = this.planetData.querySelector('.distance > p');
		this.planetTravelTime = this.planetData.querySelector('.travel > p');
		this.planetMenu = this.parent.querySelector('.planet-menu');

		this.renderPlanetMenu();
		this.update();
	}

	update() {
		const planet = DATA.destinations.at(STATE.currentPlanetIndex);
		this.planetPictSrc.srcset = planet.images.webp;
		this.planetPictImg.src = planet.images.png;
		this.planetPictImg.alt = planet.name.toLowerCase();

		this.planetName.textContent = planet.name.toUpperCase();
		this.planetDescription.textContent = planet.description;
		this.planetDistance.textContent = planet.distance.toUpperCase();
		this.planetTravelTime.textContent = planet.travel.toUpperCase();
	}

	addMenuHandler(handler) {
		this.planetMenu.addEventListener('change', handler);
	}

	renderPlanetMenu() {
		const planets = DATA.destinations.map((planet) => planet.name.toLowerCase());
		// console.log(planets);
		this.planetMenu.innerHTML = '';
		planets.forEach((planet, index) => {
			const menuItemHTML = `
				<label>
					${planet.toUpperCase()}
					<input type="radio" 
						name="planet"
						value="${planet}"
						data-index = "${index}"
						${index === STATE.currentPlanetIndex ? 'checked' : ''}
					/>
				</label>
			`;
			// console.log(menuItemHTML);
			this.planetMenu.insertAdjacentHTML('beforeend', menuItemHTML);
		});
	}
}

// export default new DestinationsView();
