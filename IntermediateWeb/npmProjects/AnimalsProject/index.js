const Log = require("log.pets");
const animals = require("animals");

// Display a random animal
console.log(`Random animal name: ${animals()}\n`);

// Display the ascii art of a lion
console.log("Lion ascii arts:");
Log.lion();

// Display zoo art with animal names from "animals" on the sign
console.log("\nAnimal zoo:");

Log.zoo(animals(), animals(), animals());

console.log(`\n# of animals in generator: ${animals.words.length}`);

// Find the count of animals starting with the specified letter
// Display error if not found
const animalsStartingWith = (letter) => {
  let lowerLetter = letter.toLowerCase();
  let animalsFound = [];
  let count = 0;
  let result = `\n# of animals starting with ${letter.toUpperCase()}: `;
  for (let i = 0; i < animals.words.length; i++) {
    if (animals.words[i].startsWith(lowerLetter)) {
      count++;
      animalsFound.push(animals.words[i]);
    }
  }
  if (count === 0) {
    return `${result} No matches found\n`;
  } else {
    return `${result} ${count}\n\n ${animalsFound}\n`;
  }
};

// Display the count of animals starting with letter "G"
console.log(animalsStartingWith("g"));
