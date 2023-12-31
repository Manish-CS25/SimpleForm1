const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/", {})
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("database not connected", err);
    process.exit();
  });
