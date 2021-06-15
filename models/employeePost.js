const { model, Schema } = require("mongoose");

const empPostSchema = new Schema({
  company: String,
  startDate: String,
  endDate: String,
  pictures: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
  description: String,
  comment: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  rating: [
    {
      user: String,
      numberOfRate: Number,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
});

module.exports = model("EmployeePost", empPostSchema);
