/* exported takeRight */
function takeRight(array, count){
  var newArray = [];
  if(array.length === 0) {
    return newArray;
  }
  for (i=array.length-count; i<array.length; i++){
      newArray.push(array[i]);
}
return newArray;
}
