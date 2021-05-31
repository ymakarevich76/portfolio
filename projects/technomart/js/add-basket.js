var basketLink = document.querySelectorAll('.card__btn-buy');
var basketModal = document.querySelector('.modal-basket');
var basketClose = document.querySelector('.basket-close');

for (var i = 0; i < basketLink.length; i++) {
	basketLink[i].addEventListener('click', function(evt) {
		evt.preventDefault();
		basketModal.classList.add('modal-show');
	});
}

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