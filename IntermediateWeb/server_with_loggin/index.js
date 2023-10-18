const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.redirect("/home");
})

app.get("/home", (req, res) => {
    res.send("Tis is my homepage!")
})

app.listen(port, () => {
    console.log(`App running on ${port}`)
})