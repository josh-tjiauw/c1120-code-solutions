/* exported capitalizeWords */
function capWord(word) {
  var firstIndex = word[0].toUpperCase();
  var otherIndex = '';
  for (var i = 1; i < word.length; i++) {
    otherIndex += word[i].toLowerCase();
  }
  var capitalizedWord = firstIndex + otherIndex;
  if (capitalizedWord === 'Javascript') {
    return 'JavaScript';
  }
  return capitalizedWord;
}


function capitalizeWords(string) {
  var words = string.toLowerCase().split(" ");
  var newWord = [];
  for (var i=0; i<words.length; i++) {
    newWord.push(capWord(words[i]));
  }
  return newWord.join(" ");
  console.log(newWord.join(" "));
  console.log(words);
}
