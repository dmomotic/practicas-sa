const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  cui: String,
  name: String
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;