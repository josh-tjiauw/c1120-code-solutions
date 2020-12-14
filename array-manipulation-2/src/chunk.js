/* exported chunk */
function chunk(array, size) {
  var newArr = [];
  var index = 0;
  while (index < array.length) {
    newArr.push(array.slice(index, size + index));
    index += size;
  }
  return newArr;
}
