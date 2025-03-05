const express = require("express");
const read = require("../controller/appList.controller");

let readRouter = express.Router();

readRouter.get("/", read.read);

module.exports = readRouter;
