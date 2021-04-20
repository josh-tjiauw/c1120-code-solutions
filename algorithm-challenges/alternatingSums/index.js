function alternatingSums(a) {
  const arrOfWeights = [];
  let weightT1 = 0;
  let weightT2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      weightT1 += a[i];
    } else {
      weightT2 += a[i];
    }
  }
  arrOfWeights.push(weightT1);
  arrOfWeights.push(weightT2);
  return arrOfWeights;
}

const test = alternatingSums([50, 60, 60, 45, 70])
console.log(test);

/*
Best answer with array.reduce()
alternatingSums = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])
*/
