const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  buss_id: {
    type: String
  },
  low: {
    type: String
  },
  medium: {
    type: String
  },
  high: {
    type: String
  },
  critical: {
    type: String
  },
});

const RewardDB = mongoose.model("REWARDDB", rewardSchema);
module.exports = RewardDB;
