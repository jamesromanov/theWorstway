const express = require("express");
const renderPatients = require("../controller/feature.controller.js");

let renderFeature = express.Router();

renderFeature.get("/", renderPatients.renderFeature);

module.exports = renderFeature;
