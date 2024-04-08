const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const transactionsController = require("./controllers/transactionsController.js");
app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send("Welcome My Budgeting App!");
});
// app.get("/transactions", (req, res) => {
//   res.send("All of the data goes here");
// });
// app.get("transactions/:id", (req, res) => {
//   res.send("Individual transaction by ID");
// });
// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found. Smh my head");
});

module.exports = app;
