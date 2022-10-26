var $formElement = document.querySelector('form');
$formElement.addEventListener('submit', preventDefaultEvent);

function preventDefaultEvent(event) {
  event.preventDefault();
  var formDataObj = {
    name: $formElement.elements.name.value,
    email: $formElement.elements.email.value,
    message: $formElement.elements.message.value
  };
  console.log(formDataObj);
  $formElement.reset();
}
