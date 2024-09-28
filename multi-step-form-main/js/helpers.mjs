// import { STATE } from './state.mjs';
// import { SectionView } from './sectionView.mjs';

String.prototype.toCapitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

export function capitalize(textline) {
	// console.log(textline);
	let capitalized = textline.split(' ');
	capitalized = capitalized.filter((word) => word.length > 0);
	capitalized = capitalized.map((word) => word.toCapitalize());
	capitalized = capitalized.join(' ');
	return capitalized;
}

export function hideElements(elementsList) {
	elementsList.forEach((element) => {
		element.classList.add('hidden');
	});
}

export function showElements(elementsList) {
	elementsList.forEach((element) => {
		element.classList.remove('hidden');
	});
}
