const checkItemName = (req, res, next) => {
  if (!req.body.item_name || null || "") {
    res.status(400).json({ error: "Name is required! D:<" });
  } else {
    console.log("name is ok >:D");
    return next();
  }
};

const checkAmount = (req, res, next) => {
  if (!req.body.amount || null || "") {
    res.status(400).json({ error: "Amount is required! D:<" });
  } else {
    console.log("Amount is ok >:D");
    return next();
  }
};

const checkDate = (req, res, next) => {
  if (!req.body.date || null || "") {
    res.status(400).json({ error: "Date is required D:<" });
  } else {
    console.log("Date is ok >:D");
    return next();
  }
};

const checkSource = (req, res, next) => {
  if (!req.body.source || null || "") {
    res.status(400).json({ error: "Source is required D:<" });
  } else {
    console.log("Source is ok >:D");
    return next();
  }
};

const checkCategory = (req, res, next) => {
  if (!req.body.category || null || "") {
    res.status(400).json({ error: "Category is required D:<" });
  } else {
    console.log("Category is ok >:D");
    return next();
  }
};
module.exports = {
  checkItemName,
  checkAmount,
  checkDate,
  checkCategory,
  checkSource,
};
