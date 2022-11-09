
var $countDown = document.querySelector('.countdown-display');
var counter = 0;
function countDown() {
  switch (counter) {
    case 0 :
      $countDown.textContent = '3';
      counter++;
      break;
    case 1 :
      $countDown.textContent = '2';
      counter++;
      break;
    case 2 :
      $countDown.textContent = '1';
      counter++;
      break;
    case 3 :
      $countDown.textContent = '~Earth Beeeelooowww Us~';
      counter++;
      clearInterval(intervalID);
      break;
  }
}

var intervalID = setInterval(countDown, 1000);
