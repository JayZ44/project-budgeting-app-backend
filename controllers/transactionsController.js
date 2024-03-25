// controllers/transactionsController.js
const express = require("express");
const transactions = express.Router();
const {
  getAllTransactions,
  getTransaction,
  createTransaction,
} = require("../queries/transaction");

// VALIDATION
const {
  checkItemName,
  checkAmount,
  checkDate,
  checkSource,
  checkCategory,
} = require("../validations/checkTransactions.js");

// INDEX
transactions.get("/", async (req, res) => {
  const allTransactions = await getAllTransactions();
  if (allTransactions[0]) {
    res.status(200).json(allTransactions);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
transactions.get("/:id", async (req, res) => {
  //remember, req.params basically means user input, so the ID is determined by the user on frontend
  const { id } = req.params;
  const transaction = await getTransaction(id);
  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).json({ error: "not found. oof" });
  }
});

//CREATE
transactions.post(
  "/",
  checkItemName,
  checkAmount,
  checkDate,
  checkSource,
  checkCategory,
  async (req, res) => {
    const transaction = await createTransaction(req.body);
    res.json(transaction);
  }
);
module.exports = transactions;
