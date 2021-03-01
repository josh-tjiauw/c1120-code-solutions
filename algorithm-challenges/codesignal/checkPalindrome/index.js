function checkPalindrome(inputString) {
  const len = inputString.length;
  let iterator = 1;
  let tf = false;
  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] === inputString[len - iterator]) {
      tf = true;
    } else {
      tf = false;
      return tf;
    }
    iterator++
  }
  return tf;
}
