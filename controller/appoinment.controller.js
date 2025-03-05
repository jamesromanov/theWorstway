const ejs = require("ejs");

let renderApp = (req, res, next) => {
  res.render("appointment");
};

module.exports = { renderApp };
