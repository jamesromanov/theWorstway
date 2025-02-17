const env = require("dotenv").config();

const app = require("./middleware/app");

app.listen(process.env.PORT || 4000);
