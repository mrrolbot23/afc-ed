const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const {person, peopleArray} = require("./fakeData")

app.use(express.static("/views/public"))

app.get("/", (req, res) => {
    res.redirect("/home")
})

app.get("/home", (req, res) => {
    let dog = "Woof!"
    let animals = ['dog', 'goat', 'shark']
    res.render("home.ejs", {dog: dog, animals: animals})
})

app.get("/people", (req,res) => {
    
    res.render("home.ejs", { animals: [], person: person, peopleArray: peopleArray})

})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})