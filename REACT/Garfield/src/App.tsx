import {aboutJonArbuckle, garfieldHates, garfieldFavorites} from "./helpers.ts";
import arbuckleImg from "./assets/jon-arbuckle.png"
import FavoriteFoods from "./components/FavoriteFoods.tsx";
import GarfieldHates from "./components/GarfieldHates.tsx"
import "./App.css"

const App = () => {
  let favoriteResults = garfieldFavorites.map(el => {
    return <li key={el}>{el}</li>
  })

  let hateResults = garfieldHates.map(el => {
    return <li key={el}>{el}</li>
  })
  return (
    <>
      <div className="about-container">
        <h1>About Jon Arbuckle</h1>
        <img src={arbuckleImg} alt="jon-arbuckle"/>
        <p>{aboutJonArbuckle}</p>
        <hr/>
      </div>
      <FavoriteFoods food={favoriteResults}></FavoriteFoods>
      <GarfieldHates hates={hateResults}></GarfieldHates>
    </>
  );
};

export default App;