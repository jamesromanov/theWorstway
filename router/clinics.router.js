const express = require("express");

const router = express.Router();

let renderPatients = require("../controller/clinics.controller");

router.get("/", renderPatients.renderData);
router.post("/", renderPatients.addDate);
router.post("/sub", renderPatients.addSubmit);
module.exports = router;
