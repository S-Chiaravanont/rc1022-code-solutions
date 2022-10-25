var $modalButton = document.querySelector('.modal-button');
$modalButton.addEventListener('click', modalVisibilityOn);

var $modelElement = document.querySelector('.modal');

var $noButton = document.querySelector('.no-button');
$noButton.addEventListener('click', modalVisibilityOff);

var $overlayBG = document.querySelector('#overlay');

var visibilitOff = true;

function modalVisibilityOn(event) {
  if (visibilitOff) {
    $modelElement.className += ' position-appear';
    $overlayBG.className = 'overlay-bg';
    visibilitOff = false;
  }
}

function modalVisibilityOff(event) {
  if (!visibilitOff) {
    $modelElement.className = 'modal';
    $overlayBG.className = '';
    visibilitOff = true;
  }
}
