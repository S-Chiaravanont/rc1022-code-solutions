function handleClick(event) {
  console.log('button clicked');
  console.log('Event object is:', event);
  console.log('Event target is:', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('Event object is:', event);
  console.log('Event target is:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('Event object is:', event);
  console.log('Event target is:', event.target);
}

var $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
