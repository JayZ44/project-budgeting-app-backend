const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome My Budgeting App!");
});
app.get("/transactions", (req, res) => {
  res.send("All of the data goes here");
});
app.get("transactions/:id", (req, res) => {
  res.send("Individual transaction by ID");
});
module.exports = app;
