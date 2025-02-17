const express = require("express");

let renders = require("../controller/sevice.controller");
let serviceRouter = express.Router();

serviceRouter.get("/", renders.readService);
module.exports = serviceRouter;
