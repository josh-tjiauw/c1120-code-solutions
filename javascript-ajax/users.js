function getName(){
  var $userList = document.getElementById('user-list');
  var xhrObject = new XMLHttpRequest();
  xhrObject.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhrObject.responseType = 'json';
  xhrObject.addEventListener('load', function () {
    console.log(xhrObject.status);
    console.log(xhrObject.response);
    for (var i = 0; i < xhrObject.response.length; i++) {
      var $li = document.createElement('li');
      $li.textContent = xhrObject.response[i].name;
      $userList.appendChild($li);
    }
  })
  xhrObject.send();
}
getName();
