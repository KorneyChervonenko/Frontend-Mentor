'use strict';
console.clear();
console.log('script started');

const btnMarkRead = document.querySelector('header > button');
const unreadCountElement = document.querySelector('header > h1 > span');
// btnMarkRead.style.backgroundColor = 'aqua';

const notificationsElement = document.querySelector('main > ul');
const notificationsList = notificationsElement.querySelectorAll('li');

btnMarkRead.addEventListener('click', (event) => {
	notificationsList.forEach((element) => element.classList.remove('unread'));
	unreadCountElement.textContent = 0;
});

notificationsElement.addEventListener('click', (event) => {
	// console.log(event.target);
	const clickedNotification = event.target.closest('li.notification');
	if (clickedNotification && clickedNotification.classList.contains('unread')) {
		clickedNotification.classList.remove('unread');
		// unreadCountElement.textContent -= 1;
		unreadCountElement.textContent--;
	}
});
