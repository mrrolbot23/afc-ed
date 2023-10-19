const readLineSync = require("readline-sync");

console.log("Welcome!");

// Task # 4. Ask three questions
let name = readLineSync.question("\nWhat is your name? ");

let favoriteFood = readLineSync.question("\nWhat is your favorite food? ");

let favoriteDrink = readLineSync.question("\nWhat is your favorite drink? ");

// Response with answers 
console.log(
  `\nHi ${name}, your favorite food is ${favoriteFood} and your favorite drink is ${favoriteDrink}.\n`
);
