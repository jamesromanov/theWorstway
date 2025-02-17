const path = require("path");
const fs = require("fs");

let readAbout = () => {
  let data = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../config/aboutDoctors.json"),
      "utf-8"
    )
  );
  return data;
};
let writeAbout = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "../config/aboutSub.json"),
    JSON.stringify(data),
    "utf8"
  );
};
let readAboutSub = () => {
  let data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../config/aboutSub.json"), "utf8")
  );
  return data;
};

module.exports = { readAbout, readAboutSub, writeAbout };
