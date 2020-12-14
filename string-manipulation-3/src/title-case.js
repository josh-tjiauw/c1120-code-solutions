/* exported titleCase */
function titleCase(title){
  var splitString = title.split(' ');
  var newString = '';
  for(var i=0; i<splitString.length; i++){

    for(var j=0; j<splitString[i].length; j++){
      splitString[i] = splitString[i].toLowerCase();
      if (j === 0 && splitString[i] !=='api' && splitString[i] !== 'in' && splitString[i] !== 'for' && splitString[i] !== 'of' && splitString[i] !== 'the' && splitString[i] !== 'javascript' && splitString[i] !== 'javascript:'){
        newString += splitString[i][j].toUpperCase();
      }
      else if(splitString[i] === 'the' && splitString[i-1][splitString[i-1].length-1] === ':'){
        newString += 'The';
        j = splitString[i].length;
      }
      else if (splitString[i][j] === '-'){
        j++;
        newString += '-' + splitString[i][j].toUpperCase();
      }
      else if (splitString[i] === 'api') {
        newString += 'API';
        j = splitString[i].length;
      }
      else if(splitString[i] === 'javascript'){
        newString += 'JavaScript';
        j=splitString[i].length;
      }
      else if (splitString[i] === 'javascript:') {
        newString += 'JavaScript:';
        j = splitString[i].length;
      }
      else{
        newString += splitString[i][j];
      }
    }
    if(i<splitString.length-1){
      newString += ' '
    }
  }
  return newString;
}
