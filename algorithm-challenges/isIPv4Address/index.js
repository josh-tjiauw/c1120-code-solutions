function isIPv4Address(inputString) {
  const split = inputString.split('.')
  return split.length === 4 && split.every(index => {
    return index !== '' && !isNaN(index) && index >= 0 && index <= 255
  })
}

console.log(isIPv4Address("64.233.161.1"))
