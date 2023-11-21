import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {diceArray} from "../helper.ts";

interface RandomNumberProps {
  randomNumber1: number;
  randomNumber2: number;

}

const Dice = ({randomNumber1,randomNumber2}: RandomNumberProps) => {


  const dice1 = diceArray[randomNumber1];
  const dice2 = diceArray[randomNumber2];
  const result = randomNumber1+randomNumber2+2

  return (
    <>
      <h1>Roll of the dice</h1>
      <div>
        <FontAwesomeIcon className="dice" icon={dice1}    />
        <FontAwesomeIcon className="dice" icon={dice2} />
      </div>
      <h2>Roll Equals: {result}</h2>
    </>
  );
};

export default Dice;