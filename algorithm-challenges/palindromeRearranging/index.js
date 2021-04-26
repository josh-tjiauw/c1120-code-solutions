function palindromeRearranging(inputString) {
  return inputString.split('').sort().join('').replace(/(\w)\1/g, '').length < 2;
}

console.log(palindromeRearranging("aabbccaccbb"))
