const ejs = require("ejs");
const nav = require("../service/clinic.service");

let renderData = (req, res, next) => {
  res.render("index", {
    data: nav.navData(),
    d: nav.readCatigories(),
    doctors: nav.readDoctors(),
    patient: nav.readPatient(),
  });
};

let addDate = (req, res, next) => {
  let data = nav.readProb();
  let id = data.at(-1).problemId;
  let body = req.body;
  console.log(body);
  let problem = {
    problemId: id + 1,
    name: body.name,
    email: body.email,
    problemText: body.problemText,
    date: body.date,
    selectDoctors: body.selectDoctors,
    mobile: body.mobile,
  };
  data.push(problem);
  nav.writeProb(data);
};
let addSubmit = (req, res, next) => {
  let body = req.body;
  let arr = nav.readFooterSubmit();
  console.log(arr);
  let id = arr.at(-1).id;
  let submit = {
    id: id + 1,
    email: body.email,
  };
  arr.push(submit);
  res.json(arr);
  nav.writeFooterSubmit(arr);
};
module.exports = { renderData, addDate, addSubmit };
