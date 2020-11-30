/* exported omit */
function omit(source, keys) {
  var arrayOfKeys = [];
  var arrayOfValues = [];
  var x;
  var newObj = {};
  for (x in source) {
    arrayOfKeys.push(x);
    arrayOfValues.push(source[x]);
  }

  for (i = 0; i < arrayOfKeys.length; i++) {
    if (arrayOfKeys[i] !== keys[0] && arrayOfKeys[i] !== keys[1]) {
      newObj[arrayOfKeys[i]] = arrayOfValues[i];
    }

  }
  return newObj;
}
