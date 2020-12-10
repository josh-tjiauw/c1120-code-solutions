var $h1 = document.querySelector('h1');
function countDown(){
  var counter = 4;
  var cd = setInterval(function(){
    $h1.textContent = counter - 1;
    counter--;
    if (counter === 0) {
      $h1.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(cd);
    }
  }, 1000);
}

countDown();
