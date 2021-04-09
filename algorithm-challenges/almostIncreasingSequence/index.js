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
    } else if (sequence[i] >= sequence[i + 1]) {
      if (!sequence[i + 2] && numFalse >= 1) {
        tf = false;
        return tf;
      } else if (!sequence[i + 2] && numFalse === 0) {
        tf = true;
        return tf;
      }
      tf = false;
      numFalse++;
      if (sequence[i] < sequence[i + 2]) {
        tf = true;
        continue;
      } else if (sequence[i - 1] < sequence[i + 1]) {
        tf = true;
      } else if (i !== 0 && sequence[i] >= sequence[i + 2]) {
        tf = false;
        return tf;
      }
    }
  }
  return tf;
}

/* Best Answer:
function almostIncreasingSequence(seq) {
  var bad=0
  for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
    bad++
    if(bad>1) return false
    if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
  }
  return true
}
*/
