var num1=11;
var num2=22;
var num3=33;
var maximumValue = Math.max(num1, num2, num3);
console.log("The biggest value from num1-3 is: ", maximumValue);

var heroes = ["Batman", "Superman", "Spiderman", "Ironman"];
var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log("The random number is: ", randomIndex);

var randomHero = heroes[randomIndex];
console.log("Random hero: ", randomHero);

/**********************************ARRAY METHODS**********************************/

var library = [
{
title: "Book 1",
author: "John Doe",
},
{
title: "Book 2",
author: "Jane Doe",
},
{
title: "Book 3,",
author: "James Doe",
},
];

var lastBook = library.pop();
console.log("The last book is: ", lastBook);

var firstBook = library.shift();
console.log("The first book is: ", firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);
console.log("Current library: ", library);

/**********************************STRING METHODS**********************************/

var fullName = "Josh Tjiauw";
var firstAndLastName = fullName.split(" ");
console.log("First and Last Name: ", firstAndLastName);

var firstName = firstAndLastName[0];
console.log("First Name: ", firstName);
var sayMyName = firstName.toUpperCase();
console.log("Say my name: ", sayMyName);
