import './App.css'
import {useState} from "react";
import WishList from "./WishList.tsx";

function App() {
  let wishList = ["Car", "House", "Switch"]
  const [countdown, setCountdown] = useState(300)



  const handleClick = () => {
    setCountdown(countdown-1)
  }



  return (
    <>
      <h1>This is my countdown app</h1>
      <div>
        <h1>My Birthday is in {countdown} days.</h1>
        <button onClick={handleClick}>Countdown Change</button>
      </div>
      <div>
        <input type="text" placeholder={"input item"}/>
        <WishList wishList={wishList}/>
      </div>
    </>
  )
}

export default App
