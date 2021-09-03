const Student = require("../models/student");

exports.saveDetails = (req, res) => {
  console.log(req.body.name);
  console.log(req.body.class);
  console.log(req.body.course);

  console.log(req.body.roll_no);
  console.log(req.body.contact_no);
  let newStudent = new Student(req.body);
  newStudent.save((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  });
};
