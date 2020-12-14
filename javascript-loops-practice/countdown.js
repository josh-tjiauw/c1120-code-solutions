/* exported countdown */
function countdown(number) {
  var arrCountDown = [];
  for (i=number; i>=0; i--){
    arrCountDown.push(i);
  }
  return arrCountDown;
}
