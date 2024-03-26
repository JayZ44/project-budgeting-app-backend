// controllers/transactionsController.js
const express = require("express");
const transactions = express.Router();
const {
  getAllTransactions,
  getTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../queries/transaction");

// VALIDATION
const {
  //   checkItemName,
  //   checkAmount,
  //   checkDate,
  //   checkSource,
  //   checkCategory,
  validateAllKeys,
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
  //   checkItemName,
  //   checkAmount,
  //   checkDate,
  //   checkSource,
  //   checkCategory,
  validateAllKeys,
  async (req, res) => {
    const transaction = await createTransaction(req.body);
    res.json(transaction);
  }
);

// DELETE
transactions.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletingTransaction = await deleteTransaction(id);
  if (deletingTransaction.id) {
    res.status(200).json(deletingTransaction);
  } else {
    res.status(404).json({ error: "not found. oof" });
  }
});

// UPDATE
transactions.put("/:id", validateAllKeys, async (req, res) => {
  const { id } = req.params;
  const updatingTransaction = await updateTransaction(id, req.body);
  if (updatingTransaction.id) {
    res.status(200).json(updatingTransaction);
  } else {
    res.status(404).json({ error: "not found. oof" });
  }
});
module.exports = transactions;
