/* exported equal */
function equal(first, second){
  return first.every((value, index) => value === second[index]) && first.length === second.length;
};
