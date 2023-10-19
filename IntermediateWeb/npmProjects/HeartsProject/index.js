const asciiHeart = require("ascii-heart");

console.log("Default Heart.\n");
console.log(asciiHeart());

console.log("Small Heart.\n");
console.log(asciiHeart(10, 10));

console.log("Large Heart.\n");
console.log(asciiHeart(40, 40));

console.log("Heart filled with JSON\n");
console.log(asciiHeart( 30, 30, {
    fill: "json"
}));

console.log("Heart filled with aliens 👽.\n");
console.log(asciiHeart( 30, 30, {
    fill: "👽"
}));
