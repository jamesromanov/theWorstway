const express = require("express");
const renderPatients = require("../controller/404.controller.js");

let routerEror = express.Router();

routerEror.get("/err", renderPatients.render404);

module.exports = routerEror;
