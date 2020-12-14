/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {};
  var obj = keyValuePair;
  var keys=keyValuePair[0];
  var value=keyValuePair[1];
  newObject[keys] = value;

  return newObject;
}
