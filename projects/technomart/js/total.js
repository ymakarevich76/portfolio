var mapLink = document.querySelector('.map__link');

if(mapLink) {
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
}
// ======================================================
var modalLink = document.querySelector('.modal-link');

if(modalLink) {
	var modalPopup = document.querySelector('.modal-write-us');
	var modalClose = modalPopup.querySelector('.modal-close');
	var modalForm = modalPopup.querySelector('.modal-form');
	var formName = modalPopup.querySelector('.modal-form__name');
	var formEmail = modalPopup.querySelector('.modal-form__email');
	
	var isStorageSupport = true;
	var storage = '';
	
	try {
		storage = localStorage.getItem('name');
	} catch (err) {
		isStorageSupport = false;
	}

modalLink.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalPopup.classList.add('modal-show');

	if(storage) {
		formName.value = storage;
		formEmail.focus();
	} else {
		formName.focus();
	}
});

modalClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalPopup.classList.remove('modal-show');
	modalPopup.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function(evt) {
	if(!formName.value || !formEmail.value) {
	evt.preventDefault();
	modalPopup.classList.remove('modal-error');
	modalPopup.offsetWidth = modalPopup.offsetWidth;
	modalPopup.classList.add('modal-error');
	} else {
		if(isStorageSupport) {
		localStorage.setItem('name', formName.value);
		}
	}
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {
		if(modalPopup.classList.contains('modal-show')) {
			evt.preventDefault();
			modalPopup.classList.remove('modal-show');
			modalPopup.classList.remove('modal-error');
		}
	}
});
}
// ==========================================================
var basketLink = document.querySelectorAll('.card__btn-buy');

if(basketLink.length) {

var basketModal = document.querySelector('.modal-basket');
var basketClose = document.querySelector('.basket-close');
	
for (var i = 0; i < basketLink.length; i++) {
	basketLink[i].addEventListener('click', function(evt) {
		evt.preventDefault();
		basketModal.classList.add('modal-show');
	});
}

if(basketClose) {
basketClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	basketModal.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode===27) {
		if(basketModal.classList.contains('modal-show')) {
			evt.preventDefault();
			basketModal.classList.remove('modal-show');
		}
	}
});
}
}