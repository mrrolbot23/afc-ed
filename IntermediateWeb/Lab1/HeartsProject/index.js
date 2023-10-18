const asciiHeart = require("ascii-heart");

console.log("Default Heart");
console.log(asciiHeart());

console.log("Small Heart.");
console.log(asciiHeart(10, 10));

console.log("Large Heart");
console.log(asciiHeart(40, 40));

console.log("Heart filled with JSON");
console.log(asciiHeart( 30, 30, {
    fill: "json"
}));
