/* exported invert */
function invert(source) {
  var arrayForSource = [];
  var arrayForKey = [];
  var newObj = {};
  for (x in source){
    arrayForSource.push(x);
    arrayForKey.push(source[x]);
  }

  for(var i=0; i<arrayForSource.length; i++) {
    newObj[arrayForKey[i]]=arrayForSource[i];
  }
  return newObj;
}
