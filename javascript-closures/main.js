function graduate(credential){
  return function getName (fullName){
    return fullName + ", " + credential;
  }
}

var medicalSchool = graduate('M.D.');
var lawSchool = graduate('Esq.');

console.log(medicalSchool('Dan Abramov'));
console.log(lawSchool('Ryan Florence'))
