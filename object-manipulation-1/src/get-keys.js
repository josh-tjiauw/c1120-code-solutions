/* exported getKeys */
function getKeys(object) {
  var keys;
  var newArray=[];
  for (keys in object) {
    newArray.push(keys);
  }
  return newArray;
}
