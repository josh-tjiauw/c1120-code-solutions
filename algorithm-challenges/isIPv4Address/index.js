function isIPv4Address(inputString) {
  const split = inputString.split('.')
  if (split.length !== 4) {
    return false
  }

  const checkValidIP = split.every(index => {
    if (index.length > 1 && index[0] === '0') {
      return false
    }

    if (index === '' || index > 255) {
      return false
    }

    return true
  })
  return checkValidIP
}

console.log(isIPv4Address("64.233.161.1a"))
