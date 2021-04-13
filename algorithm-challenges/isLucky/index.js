function isLucky(n) {
  const arrOfNumbers = n.toString().split('')
  let num1 = null;
  let num2 = null;
  const middle = arrOfNumbers.length / 2;
  for (let i = 0; i < middle; i++) {
    num1 += parseInt(arrOfNumbers[i]);
    if (i === 0) {
      num2 += parseInt(arrOfNumbers[middle]);
    } else {
      num2 += parseInt(arrOfNumbers[middle + i]);
    }
  }
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

console.log(isLucky(1230));
