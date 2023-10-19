// Import "readline-sync" package
const readLineSync = require("readline-sync");

// Display welcome message
console.log("Welcome!");

// Task # 4. Ask three questions
let name = readLineSync.question("\nWhat is your name? ");

let favoriteFood = readLineSync.question("\nWhat is your favorite food? ");

let favoriteDrink = readLineSync.question("\nWhat is your favorite drink? ");

// Response with answers
console.log(
  `\nHi ${name}, your favorite food is ${favoriteFood} and your favorite drink is ${favoriteDrink}.\n`
);


// Part 2 of the Project
console.log("-----------------------Part 2-------------------------");

const spicyTacos = () => {
    // Ask the user how spicy they want their tacos
  (spicyChoice = [
    "spicy",
    "very spicy",
    "so spicy, you won't be able to feel your face",
  ]),
    (index = readLineSync.keyInSelect(
      spicyChoice,
      "How spicy would you like your tacos? "
    ));

  if (spicyChoice[index] !== undefined) {
    //   Response confirmation
    let yesNo = readLineSync.question(
      `\nOk, so you want your tacos to be ${spicyChoice[index]}. Are you sure about that?\nYes or No... `
    );
    // Response if the user does not cancel
    if (yesNo.toLowerCase() === "yes") {
      console.log("\nOk, we will have your order right out.");
    } else {
      console.log("\nWhat's the matter? Can't handle the heat?");
    }
  } else {
    //   Response if the user cancels
    console.log("\nOk, no tacos for you then!");
  }
};

spicyTacos();
