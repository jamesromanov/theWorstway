const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const path = require("path");
const renderHome = require("../router/clinics.router.js");
const renderAbout = require("../router/about.route.js");
const serviceRouter = require("../router/service.router.js");

let app = express();
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public/view"));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", renderHome);
app.use("/about", renderAbout);
app.use("/service", serviceRouter);

module.exports = app;
