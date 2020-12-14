var container = document.querySelector('.container');
var outerCircle = document.querySelector('.outer-circle');
var count=1;

function clicked(event) {
  count++;
  if(count%2==0){
  container.className = 'container bg-black';
  outerCircle.className = 'outer-circle off shadow';
  x=1;
  }
  else {
    container.className = 'container bg-white';
    outerCircle.className = 'outer-circle on';
    x = 1;
  }
}

outerCircle.addEventListener('click',  clicked);
