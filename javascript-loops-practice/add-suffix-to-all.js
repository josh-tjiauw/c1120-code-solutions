/* exported addSuffixToAll */
function addSuffixToAll(words, suffix){
  var suffixAppended = [];
  for (i=0; i<words.length; i++){
    suffixAppended.push(words[i].concat(suffix));
  }
  return suffixAppended;
}
