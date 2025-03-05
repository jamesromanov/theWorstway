const express = require("express");
const renderPatients = require("../controller/appoinment.controller.js");

let appRouter = express.Router();

appRouter.get("/", renderPatients.renderApp);

module.exports = appRouter;
