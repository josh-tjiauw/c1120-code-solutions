/* exported getValues */
function getValues(object) {
  var keys;
  var newArray=[];

  for (keys in object){
    newArray.push(object[keys]);
  }
  return newArray;
}
