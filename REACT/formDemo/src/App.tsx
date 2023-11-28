import "./App.css"
import {ChangeEvent, FormEvent, useState} from "react";
const App = () => {
  let initialData = {
    fName: "",
    lName: "",
    age: 0
  }
  
  const [data, setData] = useState(initialData)
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(data)
  }
  
  return (
    <>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          First Name:
          <input
            type="text"
            name="fName"
            minLength={2}
            maxLength={5}
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Last Name:
          <input
            type="text"
            name="lName"
            required
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Age:
          <input
            type="number"
            name="age"
            min="1"
            max="5"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;