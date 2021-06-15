const { model, Schema } = require("mongoose");

const employerPostSchema = new Schema({
  body: String,
  qualifications: String,
  picture: {
    data: Buffer,
    contentType: String,
  },
  comment: [
    {
      body: String,
      createdAt: String,
      user: String,
    },
  ],
  employer: {
    type: Schema.Types.ObjectId,
    ref: "Employer",
  },
});

module.exports = model("EmployerPost", employerPostSchema);
