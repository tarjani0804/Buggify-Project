const mongoose = require("mongoose");

const BountySchema = mongoose.Schema(
  {
    buss_id:{
        type: String
    },
    rsrc_id: {
        type: String
    },
    report_id: {
        type: String
    },
    bounty: {
        type: String
    },
    payment_id: {
        type: String
    },
    isCleared: {
        type: Boolean
    }
  },
  {
    timestamps: true,
  }
);

const BountyDB = mongoose.model("BOUNTYDB", BountySchema);
module.exports = BountyDB;
