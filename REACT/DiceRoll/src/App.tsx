import './App.css'
import Dice from "./components/Dice.tsx";
import {getRandomInt} from "./helper.ts";
import {useState} from "react";


function App() {

  const [number1, setNumber1] = useState(2)
  const [number2, setNumber2] = useState(2)

  const handleClick = () => {
    setNumber1(getRandomInt(6))
    setNumber2(getRandomInt(6))
  }


  return (
    <>
      <Dice randomNumber1={number1} randomNumber2={number2}/>
      <button onClick={handleClick}>Roll them</button>
    </>
  )
}

export default App
