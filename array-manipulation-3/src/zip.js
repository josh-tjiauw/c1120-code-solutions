/* exported zip */
function zip(first, second){
  var mainArray = [];
  var subArray = [];
  var counter = 0;
  for(var i = 0; i < first.length && i < second.length; i++){
    subArray.push(first[counter]);
    subArray.push(second[counter]);
    mainArray.push(subArray);
    counter++;
    subArray = [];
  }
  return mainArray;
}
