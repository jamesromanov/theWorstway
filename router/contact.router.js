const express = require("express");

const router = express.Router();

let renderCnt = require("../controller/contact.controller");

router.get("/", renderCnt.renderContact);

module.exports = router;
