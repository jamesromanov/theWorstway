const express = require("express");
const renderPatients = require("../controller/feature.controller.js");

let renderFeature = express.Router();

renderFeature.get("/err", renderPatients.render404);

module.exports = renderFeature;
