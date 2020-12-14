/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName : "Josh",
  lastName : "Tjiauw",
  age : 21,
};

var fullName = student.firstName + " " + student.lastName;
console.log("Value of fullName: ", fullName);

student.livesInIrvine = true;
student.previousOccupation = "Developer";

console.log(student.livesInIrvine);
console.log(student.previousOccupation);


var vehicle = {
  make : "Tesla",
  model : "X",
  year : 2021,
};

vehicle ["color"] = "white";
vehicle ["isConvertible"] = false;

console.log("Value of vehicle: ", vehicle);

var pet = {
  name : "Bear",
  type : "Maltipoo",
};

delete pet.name;
delete pet.type;
console.log("Value of pet: ", pet);
