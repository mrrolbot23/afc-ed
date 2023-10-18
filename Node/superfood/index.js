const superFood = require("superfood");

let superFoodArr = [];

while (superFoodArr.length < 5) {
  superFoodArr.push(superFood.random());
}

console.log(superFoodArr);

let arr = superFood.all;

console.log(arr.slice(-5));

let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length >= 8) {
    arr2.push(arr[i]);
  }
}

console.log(arr2);

console.log(arr2.length)