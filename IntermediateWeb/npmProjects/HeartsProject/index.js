// Import 'ascii-heart' package
const asciiHeart = require("ascii-heart");

// Display default heart
console.log("Default Heart.\n");
console.log(asciiHeart());

// Display small heart (10px by 10px)
console.log("Small Heart.\n");
console.log(asciiHeart(10, 10));

// Display large heart (40px by 40px)
console.log("Large Heart.\n");
console.log(asciiHeart(40, 40));

// Display 30px by 30px heart filled with the word "json"
console.log("Heart filled with JSON\n");
console.log(asciiHeart( 30, 30, {
    fill: "json"
}));

// Display 30px by 30px heart filled with the alien emoji
console.log("Heart filled with aliens 👽.\n");
console.log(asciiHeart( 30, 30, {
    fill: "👽"
}));
