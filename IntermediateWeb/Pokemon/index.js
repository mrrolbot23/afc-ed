const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const pokemon = require("pokemon");

// This is the home route
app.get("/", (req, res) => {
  res.send("I am the Pokemon root route.");
});


// This handler will return a random Pokemon name
app.get("/pokemon", (req, res) => {
  res.send("Random pokemon: " + pokemon.random());
});

// This handler will return an array of 5 Pokemon names representing a "Pokedex"
app.get("/dex", (req, res) => {
  let pokemonArr = [];
  for (let i = 0; i < 5; i++) {
    pokemonArr.push(pokemon.random());
  }
  res.send(`My Pokedex: ${pokemonArr}`);
});

// This function will give you the ability to create an array of pokemon objects
// containing pokemon name, attack score, and defense score.
// Use the "number" parameter to determine how many pokemons you want in the array
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

// This handler will return an array of 5 Pokemon objects (pokemon, attack, defense) representing a "Pokedex"
app.get("/pokemon/dex", (req, res) => {
  res.send(getPokemons(5));
});

// This handler will create an array of two Pokemons and pick a battle winner based on the attack and defense scores
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

// This handler will return an image with a 404 message if the user goes to the wrong url
app.get("/*", (req, res) => {
    res.send('<img style="width: 400px; margin: auto;" src="https://cdn.dribbble.com/users/2104064/screenshots/8512308/artboardsnore_2x.png" alt="error page"/>')
})


app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
