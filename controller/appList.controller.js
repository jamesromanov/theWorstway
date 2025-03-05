const { readList } = require("../service/appList.service");

let read = (req, res, next) => {
  res.json(readList());
};
module.exports = { read };
