function almostIncreasingSequence(sequence) {
  let tf = false;
  let numFalse = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (numFalse > 1) {
      tf = false;
      return tf;
    }
    if (!sequence[i + 1]) {
      return tf;
    } else if (sequence[i] < sequence[i + 1]) {
      tf = true;
    } else if (sequence[i] > sequence[i + 1]) {
      if (!sequence[i + 2]) {
        return tf;
      }
      tf = false;
      numFalse++;
      if (sequence[i] < sequence[i + 2]) {
        tf = true;
      } else {
        tf = false;
        numFalse++;
        return tf;
      }
    }
  }
  return tf;
}
