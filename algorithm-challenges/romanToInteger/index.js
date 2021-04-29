function romanToNumber(string) {
  const splitString = string.toUpperCase().split('')
  let sum = 0;
  for (let i = 0; i < splitString.length; i++) {
    switch (splitString[i]) {
      case 'I':
        sum += 1;
        break;
      case 'V':
        sum += 5;
        break;
      case 'X':
        sum += 10;
        break;
      case 'L':
        sum += 50;
        break;
      case 'C':
        sum += 100;
        break;
      case 'D':
        sum += 500;
        break;
      case 'M':
        sum += 1000;
        break;
    }
  }
  return sum;
}

console.log(romanToNumber('XX'))
/*
declare the sum variable
split the string using .split() method
loop through the split array and put switch statements
if switch statement matches, then add x amount to the sum variable
return the sum variable
*/
