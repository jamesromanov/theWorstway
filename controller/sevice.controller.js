const nav = require("../service/service.service");
const ejs = require("ejs");
let readService = (req, res, next) => {
  res.render("services", { d: nav.readCatigories() });
};
let addService = (req, res, next) => {
  let data = nav.readProb();
  let id = data.at(-1).problemId;
  let body = req.body;
  console.log(body);
  let problem = {
    problemId: id + 1,
    name: body.name1,
    email: body.email,
    problemText: body.problemText,
    date1: body.date1,
    data2: body.date2,
    selectDoctors: body.slc,
    mobile: body.mobile,
  };
  data.push(problem);
  nav.writeProb(data);
  res.json(data);
};
module.exports = { readService, addService };
