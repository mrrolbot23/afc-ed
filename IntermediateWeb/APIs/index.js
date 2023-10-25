const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const baseUrl= "https://dog.ceo/api"


app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {

  res.render("home.ejs", {dogImage: "https://images.dog.ceo/breeds/terrier-toy/n02087046_4575.jpg"});
});

app.get("/randomDog", (req, res) => {

    let endpoint = `${baseUrl}/breeds/image/random`
    let dogImg = ""
    
    fetch(endpoint)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw Error("Something went wrong with the url...")
        }
        
    })
    .then(data => {
        dogImg = data.message
        res.render("home.ejs", {dogImage: dogImg})
    
    })
    .catch((err) => {
        console.log(err)
        res.render("error.ejs")
    })
    
})

app.get("/*", (req, res) => {
    res.render("error.ejs")
})

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
