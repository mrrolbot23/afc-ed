function sampleFunc() {
  return " This is my sampleFunc";
}

console.log(sampleFunc());

(function () {
  console.log("Ddoggy");
})();

//Arrow function
const car = () => {
  return "This is an arrow function";
};

console.log(car());

//implied return
const car2 = () => "Implied return";

console.log(car2());

const fullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

console.log(fullName("Edwin", "Roldan"));

const area = (len = 10, width = 12) => {
    return len * width
}

console.log(area())
console.log(area(10, 2))


let pets = ["brownie", "bronco", "caspper"]

console.log(pets[1].toString())

pets.length = 4;

console.log(pets)

console.log(pets.join())

console.log(pets.indexOf("bronco"))


var numList = [1,2,3,4,5,6]

for (i = 0; i < numList.length; i++) {
    numList[i] = numList[i] * 2;
}

console.log(numList)

let wordArray = ["dog", "cat", "horse", "chocolate"];

const wordLen = (word) => {
    return word.length > 3;
}

let newarray = wordArray.filter(wordLen)

console.log(newarray)