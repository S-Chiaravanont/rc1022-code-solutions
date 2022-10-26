function handleFocus(event) {
  console.log('focus event was fired.');
  console.log('Target event name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired.');
  console.log('Target event name:', event.target.name);
}

function handleInput(event) {
  console.log('Target event name:', event.target.name);
  console.log('Target event value:', event.target.value);
}

var $nameInput = document.querySelector('#user-name');
var $emailInput = document.querySelector('#user-email');
var $messageInput = document.querySelector('#user-message');

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);
$messageInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('blur', handleBlur);
$messageInput.addEventListener('input', handleInput);
