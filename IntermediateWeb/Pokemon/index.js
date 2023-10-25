const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const pokemon = require("pokemon");

app.get("/", (req, res) => {
  res.send("I am the Pokemon root route.");
});

app.get("/pokemon", (req, res) => {
  res.send("Random pokemon: " + pokemon.random());
});

app.get("/dex", (req, res) => {
  let pokemonArr = [];
  for (let i = 0; i < 5; i++) {
    pokemonArr.push(pokemon.random());
  }
  res.send(`My Pokedex: ${pokemonArr}`);
});

const getPokemons = (number) => {
  let pokemonArray = [];
  for (let i = 0; i < number; i++) {
    pokemonArray.push({
      pokemon: pokemon.random(),
      attack: Math.floor(Math.random() * 50) + 50,
      defense: Math.floor(Math.random() * 100),
    });
  }
  return pokemonArray;
};

app.get("/pokemon/dex", (req, res) => {
  res.send(getPokemons(5));
});

app.get("/battle", (req, res) => {
    let pokemons = getPokemons(2)
    let pokemon1 = pokemons[0];
    let pokemon2 = pokemons[1];
    if (pokemon1.attack > pokemon2.defense) {
        res.send(`And the winer is ${pokemon1.pokemon} with an attack of ${pokemon1.attack} and defense of ${pokemon1.defense}\n, versus ${pokemon2.pokemon} who has an attack of  ${pokemon2.attack} and defense of ${pokemon2.defense}! `)
    } else {
        res.send(`And the winer is ${pokemon2.pokemon} with an attack of ${pokemon2.attack} and defense of ${pokemon2.defense}\n, versus ${pokemon1.pokemon} who has an attack of  ${pokemon1.attack} and defense of ${pokemon1.defense}! `)

    }
})

app.get("/*", (req, res) => {
    res.send('<img style="width: 400px; margin: auto;" src="https://cdn.dribbble.com/users/2104064/screenshots/8512308/artboardsnore_2x.png" alt="error page"/>')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
