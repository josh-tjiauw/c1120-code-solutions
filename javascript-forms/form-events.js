function handleFocus(event) {
  console.log("focus event fired");
  console.log("event.target.name:" + event.target.name);
}

function handleBlur(event) {
  console.log("blur event fired");
  console.log("event.target.name: " + event.target.name);
}
function handleInput(event) {
  console.log("Value of "+event.target.name+": "+event.target.value);
}

var contactName = document.getElementById('user-name');
var contactEmail = document.getElementById('user-email');
var contactMessage = document.getElementById('user-message');

contactName.addEventListener('focus', handleFocus);
contactName.addEventListener('blur', handleBlur);
contactName.addEventListener('input', handleInput);

contactEmail.addEventListener('focus', handleFocus);
contactEmail.addEventListener('blur', handleBlur);
contactEmail.addEventListener('input', handleInput);

contactMessage.addEventListener('focus', handleFocus);
contactMessage.addEventListener('blur', handleBlur);
contactMessage.addEventListener('input', handleInput);
