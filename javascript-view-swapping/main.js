var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  // console.log('event.target.className:', event.target.className);
  // console.log(event.target.matches('.tab'));
  if (!event.target.matches('.tab')) {
    // console.log('tab is clicked');
    return;
  }
  // console.log(event.target);
  // console.log($views);
  for (var i = 0; i < $tabs.length; i++) {
    if (event.target.textContent === $tabs[i].textContent) {
      $tabs[i].className = 'tab active';
      // $views[i].setAttribute('class', 'view');
    } else {
      $tabs[i].className = 'tab';
      // $views[i].setAttribute('class', 'view hidden');
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
