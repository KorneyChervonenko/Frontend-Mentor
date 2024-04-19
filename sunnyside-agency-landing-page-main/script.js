'use script';
console.clear();
const hamburgerBtn = document.querySelector('header > nav > img[alt="drop-down menu"]');
const headerMenu = document.querySelector('header > nav > ul');
const promos = document.querySelector('main > .promos');
const arrowDown = document.querySelector('header > img[alt="arrow pointing down"]');
// promos.style.backgroundColor = 'red'
// .scrollIntoView({ behavior: 'smooth' });

arrowDown.addEventListener('click', (event) => {
	promos.scrollIntoView({ behavior: 'smooth' });
});

hamburgerBtn.addEventListener('mouseenter', (event) => {
	headerMenu.style.display = 'flex';
});

headerMenu.addEventListener('mouseleave', (event) => {
	headerMenu.style.display = 'none';
});
