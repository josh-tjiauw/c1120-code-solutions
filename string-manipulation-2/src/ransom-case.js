/* exported ransomCase */
function ransomCase(string) {
  var chars = string.toLowerCase().split("");
  for (var i=1; i<chars.length; i+=2){
    chars[i] = chars[i].toUpperCase();
  }
  return chars.join("");
}
