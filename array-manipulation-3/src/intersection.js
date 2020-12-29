/* exported intersection */
function intersection(first, second){
  var intersect = [];
  for (var i = 0; i < first.length; i++) {
    if(second.includes(first[i])){
      intersect.push(first[i]);
    }
  }
  return intersect;
}
