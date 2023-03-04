const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema({
  buss_id: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  Resolved: {
    type: String,
    required: true,
  },
  Avg_Bounty: {
    type: String,
    required: true,
  },
  Launch_Date: {
    type: String,
    required: true,
  },
});

const ProgramDB = mongoose.model("ProgramDB", ProgramSchema);
module.exports = ProgramDB;
