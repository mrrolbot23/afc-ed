import TableComponent from "./components/TableComponent.tsx";
import "./App.css"
import {FormEvent, useState} from "react";
import axios from "axios";
import {Button} from "@mui/material";
const App = () => {
  const endpoint = "https://swapi.dev/api/people"
  const [hidden, setHidden] = useState(true)

  const [people, setPeople] = useState([])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await axios.get(endpoint)
      const {results} = response.data
      setHidden(!hidden)
      setPeople(results)
    } catch (error) {
      console.log(error)
    }

  }

  const handleClick = () => {
    setHidden(true)
  }

  return (
    <>
      <div className="header-container">
        <h1>SWAPI</h1>
        <h2>The Star Wars API</h2>
      </div>
      <div className="table-container">
        <form onSubmit={handleSubmit}>
          <Button sx={{margin: 2}} variant="contained" color="success" type="submit">Submit</Button>
          <Button sx={{margin: 2}} variant="contained" color="error" type="reset" onClick={handleClick}>Reset</Button>
          <TableComponent people={people} isHidden={hidden}/>
        </form>
      </div>

    </>
  );
};

export default App;