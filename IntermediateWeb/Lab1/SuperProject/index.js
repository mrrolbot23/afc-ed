const marvel = require("marvel-characters");

// Display a random character in the terminal
console.log(`This is my random Marvel Character: ${marvel()}\n`);

// Database count
console.log(`There's currently ${marvel.characters.length} characters in the DB.`);

//Display only characters whose names start with "Man"
let ManChars = [];

try {
  for (let i = 0; i < marvel.characters.length; i++) {
    if (marvel.characters[i].startsWith("Man")) {
      ManChars.push(marvel.characters[i]);
    }
    
  }
  if (ManChars.length === 0) {
    console.log("No matches found.")
}
} catch (err) {
  console.log("Oh no! Something went wrong.");
}
console.log("\nThese are the Charcaters that start with 'Man'.\n");

console.log(ManChars);

// Display "Iron Man", aka Batman's Father.
console.log(marvel.characters.find("Iron Man"));
