function timer(){
  var $h1 = document.querySelector('h1')
  setTimeout(function(){$h1.textContent = "Hello"}, 2000);
};

timer()
