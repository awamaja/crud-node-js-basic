
const Member = require("../models/member.js");
const { format } = require('date-fns');

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const member = new Member({
    nama: req.body.nama,
    umur: req.body.umur,
    created_at: format(new Date(), "yyyy-MM-dd kk:mm:ss"),
    updated_at: format(new Date(), "yyyy-MM-dd kk:mm:ss")
  });

  // Save Customer in the database
  Member.create(member, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};