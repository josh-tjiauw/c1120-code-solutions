function sortByHeight(a) {
  const treeArrayIndex = [];
  const sortedArray = [];
  const newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treeArrayIndex.push(i)
    } else {
      sortedArray.push(a[i])
    }
  }

  sortedArray.sort((a, b) => {
    return a - b;
  })

  for (let i = 0, sortedIndex = 0; i < a.length; i++) {
    if (treeArrayIndex.includes(i)) {
      newArr.push(-1);
    } else {
      newArr.push(sortedArray[sortedIndex])
      sortedIndex++;
    }
  }
  return newArr;
}
sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])
