function areSimilar(a, b) {
  let similar = true;
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (!similar && counter > 1) {
      return similar;
    }
    if (b.includes(a[i])) {
      const bIndex = b.indexOf(a[i])
      if (bIndex === i) {
        similar = true;
      } else {
        const save = b[i];
        const findIndex = b.indexOf(a[i]);
        b[i] = a[i];
        b[findIndex] = save;
        console.log(b)
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

console.log(areSimilar([4, 6, 3], [3, 4, 6]))