const nav = require("../service/about.service");

let renderAbout = (req, res, next) => {
  res.render("about", { data: nav.readAbout() });
};
let addAboutSub = (req, res, next) => {
  let body = req.body;
  let data = nav.readAboutSub();
  let id = data.at(-1).id;
  let aboutSub = {
    id: id + 1,
    email: body.email,
  };
  data.push(aboutSub);
  nav.writeAbout(data);
  res.json(data);
};
module.exports = { renderAbout, addAboutSub };
