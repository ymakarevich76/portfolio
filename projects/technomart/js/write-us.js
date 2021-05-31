var modalLink = document.querySelector('.modal-link');
var modalPopup = document.querySelector('.modal-write-us');
var modalClose = modalPopup.querySelector('.modal__close');
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
