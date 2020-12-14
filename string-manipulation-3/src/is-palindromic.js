/* exported isPalindromic */
function isPalindromic(string){
  var reverse = [];
  var merge = string.replaceAll(' ', '');
  var middle = merge.length/2;
  middle=middle.toFixed(0)-1;
  var tf = true;

  for(var i=merge.length-1; i>middle; i--){
    reverse.push(merge[i]);
  }

  for(var j=0; j<middle; j++) {
    if(merge[j]===reverse[j] && tf!==false) {
       tf = true;
     }
     else {
       tf = false;
    }
    }
  return tf;
}
