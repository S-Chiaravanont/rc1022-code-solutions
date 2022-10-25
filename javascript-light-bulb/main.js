var $circleButton = document.querySelector('.circle');
$circleButton.addEventListener('click', switchColor);
var $bodyBackground = document.querySelector('body');

function switchColor(event) {
  var currentColor = $circleButton.className.split(' ')[1];
  if (currentColor === 'bg-yellow') {
    $bodyBackground.className = 'bg-black';
    $circleButton.className = 'circle bg-darkgray';
  } else {
    $bodyBackground.className = 'bg-white';
    $circleButton.className = 'circle bg-yellow';
  }
}
