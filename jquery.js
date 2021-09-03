const express = require("express");
const path = require("path");
//const router = express.Router()
const app = express();
const dbconnect = require("./config/db");
require("dotenv").config();
// const router = express.Router();
const port = 2000;
var cors = require("cors");

const router = require("./routes/student");

app.use(cors());
app.use(express.json());

// app.set("view engine", "html");

// app.get("/", (req, res) => {
//   res.render(path.join(__dirname, "index"));
// });

app.use("/", router);
app.listen(port, (req, res) => {
  console.log(`server is running on port:${port}`);
});
