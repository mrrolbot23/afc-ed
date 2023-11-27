import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import "./App.css"


const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json"
const App = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState("$0.00")

  const [currency, setCurrency] = useState("USD")



  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const response = await axios.get(endpoint)
      let {rate_float, code} = response.data.bpi[currency]
      let newPrice = new Intl.NumberFormat("en-US", {style: "currency", currency: code}).format(rate_float);
      setBitcoinPrice(newPrice)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setCurrency(event.target.value)
  }

  return (
    <>
      <div className="coin-container">
        <h1>Bitcoin</h1>
        <form onSubmit={handleSubmit}>
          <input type="radio" name="country" value="USD" onChange={handleChange} defaultChecked/>USD
          <input type="radio" name="country" value="GBP" onChange={handleChange}/>GBP
          <input type="radio" name="country" value="EUR" onChange={handleChange}/>EUR
          <button type="submit"  >Get Price</button>
        </form>
        <h2>Current price: {bitcoinPrice}</h2>
      </div>
    </>
  );
};

export default App;