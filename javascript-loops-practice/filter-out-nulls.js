/* exported filterOutNulls */
function filterOutNulls(values) {
  var arrayExcludingNull = [];
  for (i=0; i<values.length; i++){
    if (values[i]!= null) {
      arrayExcludingNull.push(values[i]);
    }
  }
  return arrayExcludingNull;
}
