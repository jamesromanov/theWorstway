const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const path = require("path");
const renderHome = require("../router/clinics.router.js");
const renderAbout = require("../router/about.route.js");
const serviceRouter = require("../router/service.router.js");
const routerEror = require("../router/404.router.js");
const appRouter = require("../router/appoinment.router.js");
const routerCon = require("../router/contact.router.js");
const renderFeature = require("../router/feature.router.js");

const teamRouter = require("../router/team.router.js");
const testRouter = require("../router/testimonial.router.js");
const readRouter = require("../router/appList.router.js");

let app = express();
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public/view"));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", renderHome);
app.use("/err", routerEror);
app.use("/appointment", appRouter);
app.use("/about", renderAbout);
app.use("/contact", routerCon);
app.use("/feature", renderFeature);
app.use("/team", teamRouter);
app.use("/v1/appoinments", readRouter);
app.use("/service", serviceRouter);
app.use("/testimonial", testRouter);

module.exports = app;
