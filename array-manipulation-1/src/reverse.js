/* exported reverse */
function reverse(array) {
  var newArray = [];
  if (array.length===0) {
    return newArray;
  }

  for (i=array.length-1; i>=0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
