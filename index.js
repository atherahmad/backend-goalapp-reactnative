const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

app.use("/api/goals", require("./router/goals"));

app.listen(process.env.PORT, () =>
  console.log(`Server is running at port ${process.env.PORT}`)
);
