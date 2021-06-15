const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  oName: {
    type: String,
  },
  cName: {
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
  bio: {
    type: String,
  },
  location: {
    longitude: String,
    lattitude: String,
    address: String,
  },
});
