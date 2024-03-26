const validateAllKeys = (req, res, next) => {
  //   const allKeysArr = ["item_name", "amount", "date", "source", "category"];
  const allKeysArr = Object.keys(req.body);
  //   console.log(allKeysArr);
  for (const key of allKeysArr) {
    if (!req.body[key]) {
      return res.status(400).json({ error: `${key} is required! D:<` });
    } else {
      console.log(`${key} is ok >:D`);
    }
  }
  return next();
};

// const checkAmount = (req, res, next) => {
//   if (!req.body.amount || null || "") {
//     res.status(400).json({ error: "Amount is required! D:<" });
//   } else {
//     console.log("Amount is ok >:D");
//     return next();
//   }
// };

// const checkDate = (req, res, next) => {
//   if (!req.body.date || null || "") {
//     res.status(400).json({ error: "Date is required D:<" });
//   } else {
//     console.log("Date is ok >:D");
//     return next();
//   }
// };

// const checkSource = (req, res, next) => {
//   if (!req.body.source || null || "") {
//     res.status(400).json({ error: "Source is required D:<" });
//   } else {
//     console.log("Source is ok >:D");
//     return next();
//   }
// };

// const checkCategory = (req, res, next) => {
//   if (!req.body.category || null || "") {
//     res.status(400).json({ error: "Category is required D:<" });
//   } else {
//     console.log("Category is ok >:D");
//     return next();
//   }
// };
module.exports = {
  //   checkItemName,
  //   checkAmount,
  //   checkDate,
  //   checkCategory,
  //   checkSource,
  validateAllKeys,
};
