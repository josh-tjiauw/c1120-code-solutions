/* exported isAnagram */
function isAnagram(firstString, secondString){
return checkString(firstString) === checkString(secondString)
}

function checkString(string) {
  return string.replaceAll(' ', '').split('').sort().join('');
}
