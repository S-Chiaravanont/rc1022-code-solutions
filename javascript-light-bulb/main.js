var $circleButton = document.querySelector('.circle');
$circleButton.addEventListener('click', switchColor);
var $bodyBackground = document.querySelector('body');
var isOn = true; // because initial state of light bulb is on

function switchColor(event) {
  if (isOn) {
    $bodyBackground.className = 'bg-black';
    $circleButton.className = 'circle bg-darkgray';
    isOn = false;
  } else {
    $bodyBackground.className = 'bg-white';
    $circleButton.className = 'circle bg-yellow';
    isOn = true;
  }
}
