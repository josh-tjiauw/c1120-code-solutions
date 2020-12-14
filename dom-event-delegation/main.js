var taskList = document.querySelector('.task-list');
var taskListItem = document.querySelector('.task-list-item');
taskList.addEventListener('click', function(){
  console.log("event.target: ", event.target, event.target.tagName);
  if (event.target && event.target.nodeName == 'BUTTON') {
    console.log("closest .task-list-item", event.target.closest('.task-list-item'));
    taskListItem.remove();
  }
})
