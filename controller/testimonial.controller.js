const ejs = require("ejs");

let renderTes = (req, res, next) => {
  res.render("testimonial");
};

module.exports = { renderTes };
