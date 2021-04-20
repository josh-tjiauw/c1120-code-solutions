function reverseInParentheses(inputString) {
  let tf = false;
  const start = inputString.indexOf('(');
  const end = inputString.indexOf(')')
  const test = inputString.split('').splice(start + 1, end - start - 1).reverse().join('');
  const test2 = inputString.split('').splice(end + 1).join('');
  console.log(test2)
  const newStr = inputString.split('').splice(0, start).join('').concat(test).concat(test2)
  console.log(newStr);
  console.log(test)
  return newStr;
}

reverseInParentheses('foobar(baz)blim')
