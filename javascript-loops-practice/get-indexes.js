/* exported getIndexes */
function getIndexes(array){
  var newArray = [];

  for (i=0; i<array.length; i++){
    newArray.push(array.indexOf(array[i]));
  }
  return newArray;
}
