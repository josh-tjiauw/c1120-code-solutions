function digital_root(n) {
  nArray = [];
  nToString = n.toString();
  for(var i=0; i<nToString.length; i++){
    nArray.push(+nToString.charAt(i));
  }
  for (var i = 0, sum = 0; i < nArray.length; sum += nArray[i++]);
  var sumToString = sum.toString();
  if (sumToString.length <= 1) {
    return sum;
  }
  else {
    nArray = [];
    sumToString = sum.toString();
    for (var i = 0; i < sumToString.length; i++) {
      nArray.push(+sumToString.charAt(i));
    }
    for (var i = 0, newSum = 0; i < nArray.length; newSum += nArray[i++]);
    return newSum;
  }
}

var x = digital_root(456);
console.log(x);
