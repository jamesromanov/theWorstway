const ejs = require("ejs");

let renderFeature = (req, res, next) => {
  res.render("feature");
};

module.exports = { renderFeature };
