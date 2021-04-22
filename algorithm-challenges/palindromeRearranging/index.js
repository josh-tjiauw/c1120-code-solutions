function palindromeRearranging(inputString) {
  let tf = false;
  const palindromeChecker = str => {
    let tf2 = true;
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        tf2 = false;
        return tf2;
      }
    }
    return tf2
  }

  if (palindromeChecker(inputString)) {
    tf = true;
    console.log(tf)
  } else {
    console.log('asdf')
    console.log((inputString.match(/[^a]/g) || []).length)
  }
  return tf;
}

palindromeRearranging("abbccaccbba")
