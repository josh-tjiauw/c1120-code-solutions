function addBorder(picture) {
  const newArr = [];
  const numStars = picture[0].length + 2;
  newArr.push('*'.repeat(numStars));
  newArr.push('*'.repeat(numStars));
  for (let i = 0; i < picture.length; i++) {
    newArr.splice(i + 1, 0, `*${picture[i]}*`)
  }
  return newArr
}

const test = addBorder(
  ["abc",
    "ded"])

console.log(test)
