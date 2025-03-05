const ejs = require("ejs");

let render404 = (req, res, next) => {
  res.render("404");
};
module.exports = { render404 };
