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
module.exports = { getAllTransactions, getTransaction, createTransaction };
