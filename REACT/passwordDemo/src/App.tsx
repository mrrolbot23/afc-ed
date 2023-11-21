import { useState } from 'react'
import './App.css'

function App() {

  const [type, setType] = useState("password")

  const handleType = () => {
    if (type == "text") {

      setType("password")
    } else {
      setType("text")
    }
  }

  return (
    <>
      <h1>Login Form</h1>
      <form >
        <input className="username-password" type="text" placeholder="Username"/>
        <input type={type} placeholder="Password"/>
        <br/>
        <label htmlFor="">
          <input className="checkbox" onClick={handleType} type="checkbox" aria-label="show password"/>show password
        </label>
      </form>
    </>
  )
}

export default App
