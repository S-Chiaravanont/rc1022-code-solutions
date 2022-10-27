var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabs.length; i++) {
    if (event.target.textContent === $tabs[i].textContent) {
      $tabs[i].className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }
  var dataView = event.target.getAttribute('data-view');
  for (var j = 0; j < $views.length; j++) {
    if (dataView === $views[j].getAttribute('data-view')) {
      $views[j].setAttribute('class', 'view');
    } else {
      $views[j].setAttribute('class', 'view hidden');
    }
  }
}
