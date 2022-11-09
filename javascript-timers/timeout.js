
var $heading = document.querySelector('.message');

function switchHeadingMessage() {
  $heading.textContent = 'Hello There';
}

setTimeout(switchHeadingMessage, 2000);
