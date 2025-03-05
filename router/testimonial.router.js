const express = require("express");

let renders = require("../controller/testimonial.controller");
let testRouter = express.Router();

testRouter.get("/", renders.renderTes);

module.exports = testRouter;
