const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;
const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "us-flag.png",
    alt: "US Flag",
    title: "Go to US English Site",
  },
  {
    path: "/french",
    flag: "french-flag.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "serbian-flag.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
]

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
}

app.get("/", (req, res) => {
  res.redirect("hello-world-english", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "en-US",
  });
});

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "en-US",
  });
});

app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "fr-FR",
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    countries: COUNTRY_DATA,
    currentPath: req.path,
    language: "sr-Cyrl-rs",
  });
});

app.listen(PORT, "localhost", () => {
  console.log(`Listening on port ${PORT}...`);
});