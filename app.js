const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};

const logger = require("morgan");
const db = require("./models");
db.sequelize
  .authenticate()
  .then(() => console.log("Connect to DB successfully !"))
  .catch((err) => console.log(err));

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

require("./routes")(app);

module.exports = app;
