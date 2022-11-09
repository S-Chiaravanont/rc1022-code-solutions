
var $countDown = document.querySelector('.countdown-display');
var counter = 4;
function countDown() {
  counter--;
  if (counter === 0) {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
    return;
  }
  $countDown.textContent = String(counter);
}

var intervalID = setInterval(countDown, 1000);
