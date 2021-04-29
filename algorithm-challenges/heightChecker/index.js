function heightChecker(heightArray) {
  const originalArray = [...heightArray];
  const sortedArray = heightArray.sort((a, b) => a - b)

  let count = 0;
  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] !== sortedArray[i]) {
      count++
    }
  }
  return count;
}

console.log(heightChecker([1, 2, 3, 5, 5, 4, 6]))
