/* exported pick */
/*function length(obj){
  var size=0;
  var key;
  for (key in obj) {
    if(obj.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
}*/

function pick(source, keys) {
  var arrayOfKeys = [];
  var arrayOfValues = [];
  var x;
  var newObj = {};
  for(x in source) {
    arrayOfKeys.push(x);
    arrayOfValues.push(source[x]);
  }

  for(i=0; i<arrayOfKeys.length; i++) {
    if (arrayOfKeys[i] === keys[0] || arrayOfKeys[i] === keys[1]){
      newObj[arrayOfKeys[i]]= arrayOfValues[i];
    }

  }
  return newObj;
}
