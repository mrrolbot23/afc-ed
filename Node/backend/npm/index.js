import generateName from "sillyname";
import supeheroes from "superheroes";

let sillyName = generateName();

console.log(`My name is ${sillyName}. Nice to meet you!`);

const heroeName = supeheroes.random();

console.log(`\nI am ${heroeName}, your super heroe!`);

//ECMAScript Mdodules ESM to be able to use import
//CJS Common JS
