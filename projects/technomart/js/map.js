var mapLink = document.querySelector('.map__link');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.map-close');

mapLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode===27) {
		if(mapPopup.classList.contains('modal-show')) {
			evt.preventDefault();
			mapPopup.classList.remove('modal-show');
		}
	}
});

