// import { DATA } from './data.mjs';

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

// export function getPlanetIndexByName(name) {
// 	return DATA.destinations.findIndex((planet) => planet.name.toLowerCase() === name.toLowerCase());
// }

// export function getMemberIndexByName(name) {
// 	return DATA.crew.findIndex((member) => member.name.toLowerCase() === name.toLowerCase());
// }
