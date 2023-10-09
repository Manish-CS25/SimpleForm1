const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serchText = new Schema({
  text: {
    type: String,
    //required: true,
  },
});

module.exports = mongoose.model("searchText", serchText);
