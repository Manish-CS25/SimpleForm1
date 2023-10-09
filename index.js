const express = require("express");
const path = require("path");
//const router = express.Router()
const app = express();
const dbconnect = require("./config/db");
require("dotenv").config();
// const router = express.Router();
const port = 9000;
var cors = require("cors");

const router = require("./routes/student");

app.use(cors());
app.use(express.json());

app.use("/", router);
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.listen(port, (req, res) => {
  console.log(`server is running on port:${port}`);
});
