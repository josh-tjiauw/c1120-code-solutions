function digital_root(n) {
  nArray = [];
  nToString = n.toString();
  for(var i=0; i<nToString.length; i++){
    nArray.push(+nToString.charAt(i));
  }
  for (var i = 0, sum = 0; i < nArray.length; i++){
    sum+=nArray[i]
    if (sum === 9) {
      sum = 0;
    }
    else if (sum % 9 === 0) {
      sum = 9;
    }
    else if (sum > 9){
      sum-=9;
    }
  }
  return sum;
}
