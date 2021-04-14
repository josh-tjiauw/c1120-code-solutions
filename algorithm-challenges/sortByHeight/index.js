function sortByHeight(a) {
  const newArr = [];
  const newArr2 = [];
  const middle = a.length / 2;
  for (let i = 0; i < middle; i++) {
    if (a[i + 1] < middle) {
      if (a[i] > a[i + 1]) {

      } else {
        newArr.push(a[i]);
        newArr2.push(a[middle + i])
      }
    }
  }
  console.log(newArr, newArr2)
  return newArr;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
