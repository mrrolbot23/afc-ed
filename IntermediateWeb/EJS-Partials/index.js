const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/form", (req, res) => {
  res.render("form.ejs");
});

app.get("/submitData", (req, res) => {
  console.log(req.query)
  res.send("Submitted");
});

app.post("/submitData", (req, res) => {
  console.log(req.body);
  res.send("Submitted post");
});

app.get("/search", (req, res) => {
  res.send(req.query)
})
app.listen(port, () => {
  console.log(`App running on ${port}`);
});
