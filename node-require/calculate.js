const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

num1 = parseInt(process.argv[2]);
num2 = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  const sum = add(num1, num2);
  console.log(`Result: ${sum}`);
}
else if (process.argv[3] === 'minus') {
  const diff = subtract(num1, num2);
  console.log(`Result: ${diff}`)
}
else if (process.argv[3] === 'times') {
  const product = multiply(num1, num2);
  console.log(`Result: ${product}`)
}
else if (process.argv[3] === 'over') {
  const quotient = divide(num1, num2);
  console.log(`Result: ${quotient}`)
}
else {
  console.log("Invalid");
}
