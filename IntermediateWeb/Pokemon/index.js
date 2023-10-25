const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const pokemon = require("pokemon")

app.get("/", (req, res) => {
    res.send("I am the Pokemon root route.");
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon.random())
})

app.get("/dex", (req,res) => {
    let pokemonArr = []
    for (let i = 0; i < 5; i++) {
        pokemonArr.push(pokemon.random())
    }
    res.send(`My Pokedex: ${pokemonArr}`)
})

app.get("/pokemon/dex", (req, res) => {
    console.log("testing...") 
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})