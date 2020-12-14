/* exported findIndex */
function findIndex(array, value) {
  for(i=0; i<array.length; i++) {
    if (value===array[i]) {
      return i;
    }
  }
  if (array[i] !== value)
    return -1;
  }
