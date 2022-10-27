var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.nodeName:', event.target.nodeName);
  if (event.target.nodeName === 'BUTTON') {
    // console.log('button clicked');
    console.log('closest(".task-list-item"):', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}
