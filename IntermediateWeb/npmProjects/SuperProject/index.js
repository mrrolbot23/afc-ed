const marvel = require("marvel-characters");

// Display a random character in the terminal Task # 3.8.a
console.log(`This is my random Marvel Character: ${marvel()}\n`);

// Database count Task # 3.8.b.1
console.log(
  `There's currently ${marvel.characters.length} characters in the DB.`
);

//Display only characters whose names start with "Man" Task # 3.8.b.2
let ManChars = [];

try {
  for (let i = 0; i < marvel.characters.length; i++) {
    if (marvel.characters[i].startsWith("Man")) {
      ManChars.push(marvel.characters[i]);
    }
  }
  if (ManChars.length === 0) {
    console.log("No matches found.");
  }
} catch (err) {
  console.log("Oh no! Something went wrong.");
}
console.log("\nThese are the Charcaters that start with 'Man'.\n");

console.log(ManChars);


// This function allows you to search for characters
// The example below is using "Iron Man" Task # 3.8.b.3
const findSuperHero = (superHero) => {
  for (el of marvel.characters) {
    if (el === superHero) {
      return `Found ${el}! \n`;
    }
  }
  return `Oh no! ${superHero} not found\n`;
};

console.log(findSuperHero("Iron Man"));

// The example below is using "Batman" Task # 3.8.b.4
console.log(findSuperHero("Batman"));


