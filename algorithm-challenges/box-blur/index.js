function boxBlur(image) {
  const newArray = [];
  for (let height = 0, width = 0; height < image.length - 2; height++) {
    if (image[0].length === 3) {
      const splice = Math.floor((image[height].splice(width, 3).reduce((total, index) => index + total, 0) +
        image[height + 1].splice(width, 3).reduce((total, index) => index + total, 0) +
        image[height + 2].splice(width, 3).reduce((total, index) => index + total, 0)) / 9)
      newArray.push([splice]);
      return newArray;
    }

    const splice = Math.floor((image[height].splice(width, 3).reduce((total, index) => index + total, 0) +
      image[height + 1].splice(width, 3).reduce((total, index) => index + total, 0) +
      image[height + 2].splice(width, 3).reduce((total, index) => index + total, 0)) / 9)
    console.log(splice)
    newArray.push([splice]);
    console.log(newArray)
  }
  return newArray
}

boxBlur(
  [[36, 0, 18, 9],
  [27, 54, 9, 0],
  [81, 63, 72, 45]]
)
