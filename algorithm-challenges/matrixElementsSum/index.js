function matrixElementsSum(matrix) {
  let index = 0;
  const blockedRooms = [];
  let sum = 0;


  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let elementIndex = matrix[i].indexOf(0, index);
      if (elementIndex !== -1) {
        blockedRooms.push(elementIndex);
        index = elementIndex + 1;
      }
      if (matrix[i][j] !== 0 && !blockedRooms.includes(j)) {
        sum += matrix[i][j];
      }
    }
    index = 0;
  }
  return sum;
}

matrixElementsSum([[1, 1, 1, 0],
[0, 5, 0, 1],
[2, 1, 3, 10]])
