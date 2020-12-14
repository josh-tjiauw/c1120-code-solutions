/* exported compact */
function compact(array){
  var filteredArray = [];
  for (var i=0; i<array.length; i++) {
    if (Boolean(array[i])!==false) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
