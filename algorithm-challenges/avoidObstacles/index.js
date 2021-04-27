function avoidObstacles(inputArray) {
  let jump = 2;
  let notFound = true;

  while (notFound) {
    if (inputArray.every(index => index % jump !== 0)) {
      notFound = false;
      return jump
    }
    jump++
  }

  return jump;
}

console.log(avoidObstacles([999, 1000]))

/*Best answer using some()
function avoidObstacles(inputArray) {
  var jump = 2;
  while (inputArray.some((obstacle) => obstacle % jump == 0)) {
    jump++;
  }
  return jump;
}
*/
