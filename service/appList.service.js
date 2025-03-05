const fs = require("fs");

let readList = () => {
  let data = JSON.parse(
    fs.readFileSync("./config/submitProblem.json", "utf-8")
  );
  return data;
};

module.exports = { readList };
