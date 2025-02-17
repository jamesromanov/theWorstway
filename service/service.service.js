const fs = require("fs");
const path = require("path");
const { readAbout } = require("./about.service");

let navData = () => {
  let data = JSON.parse(fs.readFileSync("./config/data.json"), "utf-8");
  return data;
};
let readCatigories = () => {
  let data = JSON.parse(fs.readFileSync("./config/catigories.json"), "utf-8");
  return data;
};
let readDoctors = () => {
  let data = JSON.parse(fs.readFileSync("./config/doctors.json"), "utf-8");
  return data;
};
let writeProb = (data) => {
  fs.writeFileSync("./config/submitProblem.json", JSON.stringify(data));
};
let readProb = () => {
  let data = JSON.parse(fs.readFileSync("./config/submitProblem.json"), "utf8");
  return data;
};
let readPatient = () => {
  let data = JSON.parse(fs.readFileSync("./config/patients.json"), "utf-8");

  return data;
};
let readFooterSubmit = () => {
  let data = JSON.parse(fs.readFileSync("./config/footerSubmit.json"), "utf8");
  return data;
};
let writeFooterSubmit = (data) => {
  fs.writeFileSync("./config/footerSubmit.json", JSON.stringify(data), "utf-8");
};

module.exports = {
  navData,
  readCatigories,
  readDoctors,
  writeProb,
  readProb,
  readPatient,
  writeFooterSubmit,
  readFooterSubmit,
};
