/*
Given an array of integers, find the pair
of adjacent elements that has the
largest product and return that product.
*/

function adjacentElementsProduct(inputArray) {
  let product = null;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const num = inputArray[i] * inputArray[i + 1];
    if (product === null || product < num) {
      product = num;
    }
  }
  return product;
}
