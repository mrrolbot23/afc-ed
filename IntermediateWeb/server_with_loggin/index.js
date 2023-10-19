const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  const logger = require("morgan");
  app.use(logger("dev"));
}

// we need this to use body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.send("Tis is my homepage!");
});

app.get("/doggy", (req, res) => {
  res.send("Doggy!!");
});

app.get("/senddata", (req, res) => {
  console.log(req);
  let { fName, age } = req.query;
  res.send(`${fName} you are ${age} years old.`);
});

app.get("/bank", (req, res) => {
  let { fName, money } = req.query;
  let result;

  if (isNaN(money)) {
    result = "Please resubmit with numerical value.";
  } else {
    result = `${fName} you have $${money}!`;
  }
  res.send(result);
});

app.post("/status", (req, res) => {
    console.log(req.body)

    let data = JSON.stringify(req.body)
  res.end(data.indexOf())
});

app.get("/:dog", (req, res) => {
  res.send(`This is my ${req.params.dog}`);
});

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
