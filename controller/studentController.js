const Student = require("../models/student");
const search = require("../models/student");

exports.saveDetails = (req, res) => {
  console.log(req.body);
  // console.log(req.body.class);
  // console.log(req.body.course);

  // console.log(req.body.roll_no);
  // console.log(req.body.contact_no);
  var newStudent = new Student(req.body);
  newStudent.save((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
};

exports.searchbox = (req, res) => {
  console.log(req.body);
  db.students.find({ name: value }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("First function call : ", docs);
    }
  });
};
