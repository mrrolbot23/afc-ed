const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect("/home")
});

app.get("/home", (req, res) => {
  res.send("I am the home page!");
});

app.get("/dog", (req, res) => {
  res.send("Doggy!!");
});

//star handler
app.get("*", (req, res) => {
  res.send("I have no idea what you want from me!");
});

// different response
// .send()
// .end()
// .json()
// .redirect()

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
