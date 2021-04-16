function sortByHeight(a) {
  const newArr = [];
  const newArr2 = [];
  const remainderArr = []
  const middle = a.length / 2;
  let popped = null;
  for (let i = 0; i < middle; i++) {
    if (a[i] > a[i + 1]) {
      if (i === middle - 1) {
        remainderArr.push(a[i])
      } else {
        popped = a[i];
      }
    } else {
      newArr.push(a[i]);
    }
  }

  let count = 0;
  for (let i = middle; i < a.length; i++) {
    if (a[i] < popped && a[i] > newArr[newArr.length - 1] && count < 1) {
      newArr.push(a[i])
      remainderArr.map(index => {
        newArr.push(index)
      })
      count++;
    } else if (a[i] > popped) {
      newArr2.push(popped)
      popped = null;
    } else if (popped && i === a.length - 1) {
      newArr2.push(a[i])
      newArr2.push(popped)
    } else {
      newArr2.push(a[i])
    }
  }

  // newArr2.forEach(index => {
  //   newArr.push(index)
  // })
  console.log(newArr, newArr2)
  return newArr;
}

sortByHeight([-1, -1, -1, -1, -1])
//[-1, 150, 160, 170, -1, -1, 180, 190].
