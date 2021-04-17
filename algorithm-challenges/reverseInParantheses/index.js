function reverseInParentheses(inputString) {
  const split = inputString.split('')
  console.log(split)
  let tf = false;
  const start = split.indexOf('(');
  const end = split.indexOf(')')
  console.log(split[start])
}

reverseInParentheses('foobar(baz)blim')
