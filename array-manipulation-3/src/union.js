/* exported union */
function union(first, second){
  var unifiedArray = [];
  for(var i = 0; i < first.length; i++){
    unifiedArray.push(first[i]);
  }

  for(var i = 0; i < second.length; i++){
    if(!first.includes(second[i])){
      unifiedArray.push(second[i]);
    }
  }
  return unifiedArray;
}
