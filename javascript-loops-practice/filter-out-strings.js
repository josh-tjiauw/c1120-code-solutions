/* exported filterOutStrings */
function filterOutStrings(values) {
  var valuesExcludingStrings = [];
  for (i=0; i<values.length; i++){
    if (typeof values[i]==='number'){
      valuesExcludingStrings.push(values[i]);
    }
  }
  return valuesExcludingStrings;
}
