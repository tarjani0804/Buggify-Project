const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  buss_id: {
    type: String,
    required: true,
  },
  low: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
  high: {
    type: String,
    required: true,
  },
  critical: {
    type: String,
    required: true,
  },
});

const RewardDB = mongoose.model("REWARDDB", rewardSchema);
module.exports = RewardDB;
