/* exported truncate */
function truncate(length, string) {
  var ellipsis = '...';
  var slicedString = string.slice(0, length);

  return slicedString + ellipsis;
}
