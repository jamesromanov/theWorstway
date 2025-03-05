const express = require("express");
const renderPatients = require("../controller/home.controller.js");

let aboutRouter = express.Router();

aboutRouter.get("/", renderPatients.renderAbout);
aboutRouter.post("/sub", renderPatients.addAboutSub);
module.exports = aboutRouter;
