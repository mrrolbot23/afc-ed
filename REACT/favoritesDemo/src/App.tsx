import "./App.css"
import horse from "./assets/horse.jpeg"
import {favoriteThings} from "./helpers.ts"
import Favorites from "./components/Favorites.tsx";
const App = () => {

  let favoriteResults = favoriteThings.map(el => {
    return <li key={el}>{el}</li>
  })

  return (
    <>
      <h1>This is the favorites project</h1>
      <img src={horse} alt="horse-picture"/>
      <Favorites results={favoriteResults}></Favorites>
    </>
  );
};

export default App;