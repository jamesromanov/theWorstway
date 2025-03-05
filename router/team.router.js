const express = require("express");

let renders = require("../controller/team.controller");
let teamRouter = express.Router();

teamRouter.get("/", renders.renderTeam);

module.exports = teamRouter;
