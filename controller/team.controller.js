const ejs = require("ejs");

let renderTeam = (req, res, next) => {
  res.render("team");
};

module.exports = { renderTeam };
