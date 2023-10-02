//Create an object
var person = {
  name: "Edwin",
  city: "Yabucoa",
  age: 32,
  hobbies: "Code",
};
console.log(
  `${person.name}, you are ${person.age}. You live in ${person.city}`
);

//you can set new values
person.name = "Joe";

console.log(person.name);

var person2 = {};


person2.name = "Juan";
person2.age = 34;
person2.city = "Humacao";

console.log(person2)

var person3 = {
    name: "Dily",
    city: "Vegas",
    age: 32,
    hobbies: "Code",
    family: ["Jose", "Edwin"],
    friends: {
        bestFriend: "Jay",
        enemy: "none"
    }
  };

//print an object value that contains a sring. Select a specific elemen from that list
console.log(person3.family[0])

//you can add to a list
person3.family.push("Carmen")

console.log(person3.family)



console.log(person3["friends"]["bestFriend"])