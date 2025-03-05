const ejs = require("ejs");

let renderContact = (req, res, next) => {
  res.render("contact");
};

module.exports = { renderContact };
