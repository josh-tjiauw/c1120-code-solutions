/* exported capitalize */
function capitalize(word) {
  var firstIndex = word[0].toUpperCase();
  var otherIndex = '';
  for (i=1; i<word.length; i++) {
  otherIndex += word[i].toLowerCase();
  }
  var capitalizedWord = firstIndex + otherIndex;
  return capitalizedWord;
}
