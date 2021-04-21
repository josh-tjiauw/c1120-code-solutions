function areSimilar(a, b) {
  let similar = true;
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (!similar && counter > 1) {
      return similar;
    }
    if (b.includes(a[i])) {
      const bIndex = b.indexOf(a[i], i)
      if (bIndex === i) {
        similar = true;
      } else {
        const save = b[i];
        const findIndex = b.indexOf(a[i], i);
        b[i] = a[i];
        b[findIndex] = save;
        similar = false;
        counter++;
      }
    } else {
      similar = false;
      counter++;
    }
  }
  return similar;
}

console.log(areSimilar([3, 4, 8, 6, 8, 3, 5], [3, 4, 8, 5, 8, 3, 6]))


/*Best answer using filter()
function areSimilar(a, b) {
    const ad = a.filter((v,i)=>v!=b[i])
    // [6,5]
    const bd = b.filter((v,i)=>v!=a[i])
    // [5,6]
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}
*/
