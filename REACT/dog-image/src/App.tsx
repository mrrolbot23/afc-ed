import "./App.css"
import { useState} from "react";
import axios from "axios";
const App = () => {
  const [dogImage, setDogImage] = useState("https://images.dog.ceo/breeds/dalmatian/cooper1.jpg")

  const randomURL = "https://dog.ceo/api/breeds/image/random"

  const handleCLick = async () => {
    try {
      const result = await axios.get(randomURL);
      setDogImage(result.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Get a random dog</h1>
      <div className="dog-image-container">
        <img src={dogImage} alt="dog-image"/>
      </div>
      <button onClick={handleCLick}>Random Dog</button>
    </>
  );
};

export default App;