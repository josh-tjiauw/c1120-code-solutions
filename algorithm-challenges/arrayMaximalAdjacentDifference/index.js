function arrayMaximalAdjacentDifference(inputArray) {
  let biggestDifference = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const currentDifference = Math.abs(inputArray[i] - inputArray[i + 1])
    if (currentDifference > biggestDifference) {
      biggestDifference = currentDifference;
    }
  }
  return biggestDifference
}

console.log(arrayMaximalAdjacentDifference(['hello']))
