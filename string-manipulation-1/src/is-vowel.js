/* exported isVowel */
function isVowel(character) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (i=0; i<vowels.length; i++) {
  if (character===vowels[i]) {
    return character=true;
  }
}
  return character=false;
}
