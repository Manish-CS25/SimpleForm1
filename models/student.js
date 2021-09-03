const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    //required: true,
  },
  class: {
    type: String,
    //required: true,
  },
  roll_no: {
    type: String,
    //required: true,
  },
  course: {
    type: String,
    // required: true,
  },
  contact_no: {
    type: Number,
    //required: true,
  },
});

module.exports = mongoose.model("studentDetails", studentSchema);
