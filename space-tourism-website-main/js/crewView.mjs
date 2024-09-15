import { DATA } from './data.mjs';
import { STATE } from './state.mjs';
import { SectionView } from './sectionView.mjs';
import { capitalize } from './helpers.mjs';

export class CrewView extends SectionView {
	constructor() {
		super('.crew');
		console.log('CrewView created');

		this.memberPict = this.parent.querySelector('.member-image');
		this.memberPictSrc = this.memberPict.querySelector('source');
		this.memberPictImg = this.memberPict.querySelector('img');

		this.memberInfo = this.parent.querySelector('.member-info');
		this.memberRole = this.memberInfo.querySelector('.member-role');
		this.memberName = this.memberInfo.querySelector('.member-name');
		this.memberBio = this.memberInfo.querySelector('.member-bio');

		this.memberMenu = this.parent.querySelector('.member-menu');

		this.renderCrewMenu();
		this.update();
	}

	update() {
		const member = DATA.crew.at(STATE.currentMemberIndex);

		this.memberPictSrc.srcset = member.images.webp;
		this.memberPictImg.src = member.images.png;
		this.memberPictImg.alt = capitalize(member.name);

		this.memberRole.textContent = member.role.toUpperCase();
		this.memberName.textContent = member.name.toUpperCase();
		this.memberBio.textContent = member.bio;
	}

	addMenuHandler(handler) {
		this.memberMenu.addEventListener('change', handler);
	}

	renderCrewMenu() {
		this.memberMenu.innerHTML = '';
		DATA.crew.forEach((member, index) => {
			const menuItemHTML = `
				<input type="radio" 
					name="member" 
					value="${capitalize(member.name)}"
					title="${capitalize(member.role)}"
					data-index = "${index}"
					${index === STATE.currentMemberIndex ? 'checked' : ''} 
				/>
			`;
			// console.log(menuItemHTML);
			this.memberMenu.insertAdjacentHTML('beforeend', menuItemHTML);
		});
	}
}

// export default new DestinationsView();
