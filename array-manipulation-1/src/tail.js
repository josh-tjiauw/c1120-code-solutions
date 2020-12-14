/* exported tail */
function tail(array) {
  var newArray = [];
  if(array.length===0) {
    return newArray;
  }

  for(var i=1; i<array.length; i++) {
    newArray.push(array[i])
  }
  return newArray;
}
