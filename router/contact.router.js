const express = require("express");

let renderCnt = require("../controller/contact.controller");
let routerCon = express.Router();

routerCon.get("/", renderCnt.renderContact);

module.exports = routerCon;
