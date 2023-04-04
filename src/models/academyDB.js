const mongoose = require("mongoose");

const AcadSchema = mongoose.Schema(
  {
    rsrc_id: String,
    course_id: [String]
  },
  {
    timestamps: true,
  }
);

const AcademyDB = mongoose.model("ACADDB", AcadSchema);
module.exports = AcademyDB;