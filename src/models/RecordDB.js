const mongoose = require("mongoose");

const RecordSchema = mongoose.Schema(
  {
    rsrc_id: String,
    course_id: String,
    vid_num: [String],
  },
  {
    timestamps: true,
  }
);

const RecordDB = mongoose.model("RECDB", RecordSchema);
module.exports = RecordDB;
