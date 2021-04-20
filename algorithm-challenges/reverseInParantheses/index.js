function reverseInParentheses(inputString) {
  let tf = false;
  const regex = /[(]/g;
  var count = inputString.match(regex).length
  console.log(count)
  const rev = (input) => {
    const start = input.indexOf('(');
    const end = input.indexOf(')')
    const test = input.split('').splice(start + 1, end - start - 1).reverse().join('');
    const test2 = input.split('').splice(end + 1).join('');
    const newStr = input.split('').splice(0, start).join('').concat(test).concat(test2);
    return input.split('').splice(0, start).join('').concat(test).concat(test2);
  }
  let newStr = rev(inputString)
  let i = 0;
  while (i !== -1) {
    if (newStr.includes('(')) {
      newStr = rev(newStr);
    } else {
      i = -1;
      return newStr;
    }
  }
}

reverseInParentheses('foo(bar(baz))blim')
