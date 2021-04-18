const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/student');

const app = express();

const saveStudents = async () => {
  const student1 = new Student({ cui: '2013-18633', name: 'Diego' });
  const student2 = new Student({ cui: '2014-95488', name: 'Karla' });
  await student1.save();
  await student2.save();
}

app.get('/containers', async (req, res) => {
  // await saveStudents();
  const message = 'Data from MONGODB Container';
  const students = await Student.find();
  res.status(200).json({ message, students });
});

mongoose.connect(
  `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017/mydatabase?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async (err) => {
    if (!err) {
      console.log("CONNECTED TO MONGODB!!");
      app.listen(process.env.PORT);
      console.log(`Listen on port: ${process.env.PORT}`);
    } else {
      console.log("SOMETHING WENT WRONG");
      console.log(err);
    }
  }
);