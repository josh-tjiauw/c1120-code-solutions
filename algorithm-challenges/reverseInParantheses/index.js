function reverseInParentheses(inputString) {
  let outputString = inputString;
  let nested = false;
  if (outputString.includes('(')) {
    const outer = outputString.indexOf('(')
    const checker = outputString.split('').splice(outer + 1, outputString.length);
    if (checker.includes('(') && checker.indexOf('(') < checker.indexOf(')')) {
      nested = true;
    }
  }
  const rev = (input) => {
    const start = input.indexOf('(');
    const end = input.indexOf(')')
    const test = input.split('').splice(start + 1, end - start - 1).reverse().join('');
    const test2 = input.split('').splice(end + 1).join('');
    return input.split('').splice(0, start).join('').concat(test).concat(test2);
  }

  let i = 0;
  while (i !== -1) {
    if (i === 0 && !nested) {
      outputString = rev(outputString);
      if (outputString.includes('(')) {
        i = 0;
      } else {
        i = -1;
      }
    } else if (i === 0 && nested) {
      const firstPar = inputString.indexOf('(')
      const secondPar = inputString.indexOf('(', firstPar + 1)
      const secondClosePar = inputString.indexOf(')')
      const firstClosePar = inputString.indexOf(')', secondClosePar + 1)
      const innerReverse = inputString.split('').splice(secondPar + 1, secondClosePar - secondPar - 1).reverse();
      let outerReverse = inputString.split('').splice(firstPar + 1, secondPar - firstPar - 1);
      outerReverse = outerReverse.concat(innerReverse).reverse();
      const lastChar = inputString.split('').splice(firstClosePar + 1)
      outputString = inputString.split('').splice(0, firstPar).concat(outerReverse).concat(lastChar).join('')
      i = -1;
    } else {
      i = -1;
    }
  }
  return outputString;
}

const testFunc = reverseInParentheses('foo(barbaz)blim')
console.log(testFunc)

/*
Best Solution With Regex
function reverseInParentheses(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}
*/
