/* exported numVowels */
function numVowels(string){
  var count = 0;
  var chars = string.split("");

  for (i=0; i<chars.length; i++) {
    if (chars[i] == 'a' || chars[i] == 'A' || chars[i] == 'e' || chars[i] == 'E' || chars[i] == 'i' || chars[i] == 'I' || chars[i] == 'o' || chars[i] == 'O' || chars[i] == 'u' || chars[i] == 'U') {
      count++;
    }
  }
  return count;
}
