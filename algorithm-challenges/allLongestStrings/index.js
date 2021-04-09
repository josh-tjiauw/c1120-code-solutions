function allLongestStrings(inputArray) {
  let long = 0;
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length >= long) {
      long = inputArray[i].length;
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === long) {
      outputArray.push(inputArray[i]);
    }
  }
  console.log(outputArray);
  return outputArray;
}

allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])

/*Best Answer
function allLongestStrings(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}
*/
