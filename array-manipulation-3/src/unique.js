/* exported unique */
function unique(array){
  var unique = [];
  for(var i = 0; i < array.length; i++){
    if (!unique.includes(array[i])){
      unique.push(array[i]);
    }
  }
  return unique;
}
