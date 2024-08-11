const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

const model=mongoose.model('employeedetails', employeeSchema);
module.exports = model;