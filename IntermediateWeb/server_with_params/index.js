const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("This is the home page!");
});

app.get("/:doggy", (req, res) => {
  res.send(req.params.doggy);
});

app.get("/doggy", (req, res) => {
  res.send("This is doddy!");
});

app.get("/bank/:name/account/:dollars", (req, res) => {
    let { name, dollars } = req.params;
    let results;
    if (isNaN(dollars)) {
        results = "Please submit with a numerical value"
    } else {
        results = `${name}, you have ${Number(dollars) + 10}`
    }
    res.send(results);
  });

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
