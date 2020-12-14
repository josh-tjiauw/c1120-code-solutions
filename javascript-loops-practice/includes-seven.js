/* exported includesSeven */
function includesSeven(array) {
  if (array.length===0) {
    return false;
  }

  for (i=0; i<array.length; i++) {
    if (array[i]===7){
      return true;
      break;
    }
  }
  if (array[i]!=true) return false;
}
