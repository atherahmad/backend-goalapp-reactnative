const express = require("express");
const app = express();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
require("dotenv").config();

connectDB();
app.use(bodyParser.json());
app.use("/api/goals", require("./router/goals"));

app.listen(process.env.PORT, () =>
  console.log(`Server is running at port ${process.env.PORT}`)
);
