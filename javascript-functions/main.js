function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log("Converting 5 minutes to seconds: ", convertMinutesToSeconds(5));

function greet(name) {
  var greeting = "Hey, " + name + "!";
  return greeting;
}

console.log("greet('Josh') function will return: ", greet('Josh'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log("getArea(17,42) function will return: ", getArea(17,42))

function getFirstName(person) {
  return person.firstName;
}

var person = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
}

console.log("getFirstName(person) will return: ", getFirstName(person));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

console.log("getLastElement(['propane', 'and', 'propane', 'accessories']) will return: ", getLastElement(['propane', 'and', 'propane', 'accessories']));
