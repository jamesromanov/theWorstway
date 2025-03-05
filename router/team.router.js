const express = require("express");

let renders = require("../controller/team.controller");
let serviceRouter = express.Router();

serviceRouter.get("/", renders.renderTeam);
module.exports = serviceRouter;
