const defangIPaddr = function (address) {
  const split = address.split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '.') {
      split[i] = `[.]`;
    }
  }
  return split.join('')
};

// split the string into an array
// for each "." use string literals encasing the period
// after doing it to all of the periods, use join method to make it into a string again

console.log(defangIPaddr('1.2.3.4.5'))
