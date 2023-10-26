const { response } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const endPointUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

app.get("/", (req, res) => {
  res.redirect("/home");
});

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
      selected = req.body.currency
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
      selected = req.body.currency

      res.render("home.ejs");
    })
    .catch((err) => {
      console.log(err);
      res.render("error.ejs");
    });
});

app.get("/*", (req, res) => {
  res.render("error.ejs");
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
