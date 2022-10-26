var $modalButton = document.querySelector('.modal-button');
$modalButton.addEventListener('click', modalVisibilityOn);

var $modelElement = document.querySelector('.modal');

var $noButton = document.querySelector('.no-button');
$noButton.addEventListener('click', modalVisibilityOff);

var $overlayBG = document.querySelector('#overlay');

function modalVisibilityOn(event) {
  // console.log('modal button clicked');
  $modelElement.className += ' position-appear';
  $overlayBG.className = 'overlay-bg';
}

function modalVisibilityOff(event) {
  $modelElement.className = 'modal';
  $overlayBG.className = '';
}
