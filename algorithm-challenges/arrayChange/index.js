function arrayChange(inputArray) {
  let needed = 0;
  const newArr = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const oneUp = inputArray[i] - inputArray[i + 1] + 1;
      inputArray[i + 1] += oneUp;
      needed += oneUp;
    }
  }
  return needed;
}

console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]))
