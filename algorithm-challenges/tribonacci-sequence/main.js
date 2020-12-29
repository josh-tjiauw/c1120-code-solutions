function tribonacci(signature, n) {
  var counter = 0;
  if(n < 3){
    for(var i = signature.length - 1; i >= n; i--){
      signature.splice(i, 1);
    }
    return signature;
  }
  for(var i = 0, calc = 0; i < n; i++){
    if(i < 3){
      calc+=signature[i];
    }
    else if(i === 3){
      signature.push(calc);
      calc = 0;
    }
    else if(i > 3){
      calc = signature[i - 1] + signature[i - 2] + signature[i - 3];
      signature.push(calc);
      calc = 0;
    }
    counter++;
  }
  return signature;
}


/*Best Practices:
function tribonacci(signature,n){
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
*/
