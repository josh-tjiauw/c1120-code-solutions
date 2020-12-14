/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
var shia = {
  name: "Shia Lebouf",
  age: 34
};

//Functions

function isUnderFive(number) {
  if (number<5) {
    return true;
  }
  else {
    return false;
  }
}

function isEven(number) {
  var value = number%2;
  if (value==0) {
    return true;
  }
  else {
    return false;
  }
}

function startsWithJ(string) {
  var firstIndex = string[0];
  if (firstIndex==="J") {
    return true;
  }
  else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  var age = person.age;
  if (age >= 18) {
    return true;
  }
  else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  var personsAge = person.age;
  if (personsAge >= 16) {
    return true;
  }
  else{
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  var neutral = "neutral";
  var acidic = "acidic";
  var basic = "basic";
  var invalid ="invalid pH level";

  if (pH==7) {
    return neutral;
  }
  else if (pH<7 && pH>=0) {
    return acidic;
  }
  else if (pH>7 && pH<=14) {
    return basic;
  }
  else {
    return invalid;
  }
}

function introduceWarnerBro(name) {
  var catchPhrase1 = "We're the warner brothers!";
  var catchPhrase2 = "I'm cute~";
  var catchPhrase3 = "Goodnight everybody!";

  if (name==="yakko" || name==="wakko") {
    return catchPhrase1;
  }
  else if (name==="dot") {
    return catchPhrase2;
  }
  else {
    return catchPhrase3;
  }
}
