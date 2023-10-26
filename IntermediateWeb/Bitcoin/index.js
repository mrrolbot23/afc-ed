const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// This line ensures that we have access to the public folder in our project
app.use(express.static("public"));

// These line allow us to parse through the body of our requests below
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Enpoint URL
const endPointUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Route redericts the user to our Home Page
app.get("/", (req, res) => {
  res.redirect("/home");
});

// Home Page route.
app.get("/home", (req, res) => {
  fetch(endPointUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Something went wrong with the url...");
      }
    })
    .then((data) => {
      bitcoinPrice = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(data.bpi["USD"]["rate_float"]);
      selected = req.body.currency;
      res.render("home.ejs");
    })
    .catch((err) => {
      console.log(err);
      res.render("error.ejs");
    });
});

app.post("/pricedata", (req, res) => {
  fetch(endPointUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Something went wrong with the url...");
      }
    })
    .then((data) => {
      bitcoinPrice = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: req.body.currency,
      }).format(data.bpi[req.body.currency]["rate_float"]);
      selected = req.body.currency;

      res.render("home.ejs");
    })
    .catch((err) => {
      console.log(err);
      res.render("error.ejs");
    });
});

// Display Error Page if bad request happends
app.get("/*", (req, res) => {
  res.render("error.ejs");
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
