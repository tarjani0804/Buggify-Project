const mongoose = require("mongoose");

const certSchema = new mongoose.Schema({
  rsrc_id: {
    type: String,
    required: true,
  },
  certificate_id: {
    type: String,
    required: true,
  },
  exam_date: {
    type: String,
    required: true,
  },
});

const CertDB = mongoose.model("CERTDB", certSchema);
module.exports = CertDB;
