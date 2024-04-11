'use strict';
console.clear();

const header = document.querySelector('header');
const openMenuBtn = header.querySelector('img[alt="drop-down menu"]');

const menu = header.querySelector('nav');
const closeMenuBtn = menu.querySelector('img[alt="cross"]');
const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

// menu.style.display = 'block';
// closeMenuBtn.style.backgroundColor = 'aqua'
// dropDownMenuBtn.style.backgroundColor = 'aqua';

openMenuBtn.addEventListener('click', (event) => {
	// menu.classList.remove('hidden');
	menu.style.display = 'block';
	// body.style.backgroundColor = "hsla(251, 8%, 54%)";

	// main.style.opacity = '0.5';
	// footer.style.opacity = '0.5';
	// menu.style.opacity = '1';

	// menu.style.display = 'unset';
	// openMenuBtn.style.display = 'none';
});

closeMenuBtn.addEventListener('click', (event) => {
	// menu.classList.add('hidden');
	menu.style.display = 'none';
	// main.style.opacity = '1';
	// footer.style.opacity = '1';
	// body.style.backgroundColor = 'white';
	// body.style.opacity = '1';
	// console.log('close clicked');
	// menu.style.display = 'initial';
	// menu.style.display = 'unset';

	// openMenuBtn.style.display = 'block';
	// openMenuBtn.style.display = 'initial';
});
