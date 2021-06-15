const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  Fname: {
    type: String,
    required: true,
  },
  Lname: {
    type: String,
    required: true,
  },
  Onames: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  picture: {
    data: Buffer,
    contentType: String,
  },
  phone: {
    type: String,
    required: true,
  },
  education: [
    {
      name: String,
      startYear: String,
      endYear: String,
    },
  ],
  bio: [
    {
      body: String,
      createdAt: String,
    },
  ],
  reviews: [
    {
      emp: String,
      body: String,
      createdAt: String,
    },
  ],

  rating: [
    {
      username: String,
      createdAt: String,
      value: Number,
    },
  ],
});

module.exports = mongoose.model("Employee", employeeSchema);
