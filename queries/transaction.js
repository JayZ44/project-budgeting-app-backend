const db = require("../db/dbConfig.js");
//this is where the functions for each route is made.
//the actual routes are made in the transactionsControllers file.

//get ALL transactions
const getAllTransactions = async () => {
  try {
    const allTransactions = await db.any("SELECT * FROM transactions");
    console.log(allTransactions);
    return allTransactions;
  } catch (error) {
    return error;
  }
};

//get ONE transaction
const getTransaction = async (id) => {
  try {
    const oneTransaction = await db.one(
      "SELECT * FROM transactions WHERE id=$[id]",
      {
        id: id,
      }
    );
    return oneTransaction;
  } catch (error) {
    return error;
  }
};

//create a transaction
const createTransaction = async (transaction) => {
  try {
    const newTransaction = await db.one(
      "INSERT INTO transactions (item_name, amount,date,source,category) VALUES($1, $2,$3,$4,$5) RETURNING *",
      [
        transaction.item_name,
        transaction.amount,
        transaction.date,
        transaction.source,
        transaction.category,
      ]
    );
    return newTransaction;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteTransaction = async (id) => {
  try {
    const deletedTransaction = await db.one(
      "DELETE FROM transactions WHERE id=$1 RETURNING *",
      id
    );
    return deletedTransaction;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateTransaction = async (id, transaction) => {
  try {
    const updatedTransaction = await db.one(
      "UPDATE transactions SET item_name=$1, amount=$2,date=$3,source=$4,category=$5 WHERE id=$6 RETURNING *",
      [
        transaction.item_name,
        transaction.amount,
        transaction.date,
        transaction.source,
        transaction.category,
        id,
      ]
    );
    return updatedTransaction;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllTransactions,
  getTransaction,
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
