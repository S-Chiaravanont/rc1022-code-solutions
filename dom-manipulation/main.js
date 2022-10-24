var clickCount = 0;

function clickCountIncrement(event) {
  clickCount++;
  $clickCount.textContent = 'Clicks: ' + clickCount;
  if (clickCount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', clickCountIncrement);
