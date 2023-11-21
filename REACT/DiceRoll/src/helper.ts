import {faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo} from "@fortawesome/free-solid-svg-icons";

const diceArray = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

export {diceArray, getRandomInt}