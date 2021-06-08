function minesweeper(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(true)) {
      console.log(matrix[i])
    }
  }
}

const matrix = [[true, false, false],
[false, true, false],
[false, false, false]]

minesweeper(matrix)
