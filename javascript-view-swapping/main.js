var tabContainerNodeList = document.querySelector('.tab-container');
var tabNodeList = document.querySelectorAll('.tab');
var viewNodeList = document.querySelectorAll('.view');

tabContainerNodeList.addEventListener('click', function(e){
  if(e.target && e.target.matches('.tab')){
    for(i=0; i<tabNodeList.length; i++) {
      if(tabNodeList[i] !== e.target) {
        tabNodeList[i].className = 'tab';
      }
      else{
        tabNodeList[i].className = 'tab active';
      }
    }
    var dataViewNodeList = e.target.getAttribute('data-view');
    for (j = 0; j < viewNodeList.length; j++) {
      if (dataViewNodeList !== viewNodeList[j].getAttribute('data-view')) {
        viewNodeList[j].className = 'view hidden';
      }
      else {
        viewNodeList[j].className = 'view';
      }
    }
  }
  console.log()
})
