/* exported getWords */
function getWords(string) {
  var arrayOfWords = [];
  if(string.length===0) {
    return arrayOfWords;
  }
  var splitting = string.split(' ');

  if (splitting.length>0) {
    for (i=0;i<splitting.length; i++)
    arrayOfWords.push(splitting[i])
  }
  return arrayOfWords;
}
