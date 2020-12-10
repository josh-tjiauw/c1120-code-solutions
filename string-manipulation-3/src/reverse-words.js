/* exported reverseWords */
function reverseWords(string) {
  var split = string.split(' ');
  var reversedArray = [];
  var reversedArray2 = [];
  for(i=0; i<split.length; i++){
    reversedArray.push(split[i]);
    if (i !=0){
      reversedArray2.push(' ');
    }
    for(j=reversedArray[i].length-1; j>=0; j--){
      reversedArray2.push(split[i][j]);
    }
  }
  return reversedArray2.join('');
}
