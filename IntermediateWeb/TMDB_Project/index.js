const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const { url, options, searchOptions, getInfo } = require("./config");

// This line ensures that we have access to the public folder in our project
app.use(express.static("public"));

// These line allow us to parse through the body of our requests below
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  getInfo(url, options, req, res, "home.ejs");
});

app.get("/nowplaying", (req, res) => {
  getInfo(url, options, req, res, "nowPlaying.ejs");
});

app.get("/search", (req, res) => {
  let searchUrl = `https://api.themoviedb.org/3/search/movie?query=${req.query.search}&include_adult=false&language=en-US&page=1`;
  getInfo(searchUrl, options, req, res, "search.ejs");
});

app.get("/*", (req, res) => {
  res.render("error.ejs");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
