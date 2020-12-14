var $viewsNodeList = document.querySelectorAll('.view');
var $previousButton = document.getElementById('left-button');
var $nextButton = document.getElementById('right-button');
var $dataViewNodeList = [];
var counter = 0;
for (var i = 0; i < $viewsNodeList.length; i++) {
  var dvnode = $viewsNodeList[i].getAttribute('data-view');
  $dataViewNodeList.push(dvnode);
}
function viewSwap(dataview){
  for(var i=0; i<$viewsNodeList.length; i++){
    if(dataview !== $dataViewNodeList[i]){
      $viewsNodeList[i].className = 'view hidden';
    }
    else {
      $viewsNodeList[i].className = 'view';
      counter = i;
    }
  }
};

document.addEventListener('click', function(event){
  if(event.target.nodeName !== 'BUTTON'){
    return;
  }
  else{
    viewSwap(event.target.getAttribute('data-view'));
    console.log();
  }
})

//Timer
function switchImage(){
  var si = setInterval(function(){
  var dv = $dataViewNodeList[counter]
  viewSwap(dv);
  counter++
  if(counter === 5){
    counter = 0;
  }
  }, 3000)
}

switchImage();
