const express = require("express");
const student = require("../models/student");
const router = express.Router();
const control = require("../controller/studentController");

router.post("/formpost", control.saveDetails);
// (req, res) => {
//   console.log(req.body.name);
//   console.log(req.body.class);
//   console.log(req.body.roll_no);
//   console.log(req.body.course);
//   console.log(req.body.contact_no);
//   return res.status(200).send("success");

module.exports = router;
