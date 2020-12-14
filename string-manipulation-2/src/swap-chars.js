/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
/*  var fullIndex = string.split('');
  var indexOne = string[firstIndex];
  var indexTwo = string[secondIndex];
  fullIndex.splice(indexOne, 1, indexTwo);
  var indexx = fullIndex.join("");

  var newString = indexx;
  newString[secondIndex] = indexOne;
  return newString;*/


  return string.substr (0,firstIndex) + string[secondIndex] + string.substring(firstIndex+1, secondIndex) + string[firstIndex] + string.substr(secondIndex+1);

}
