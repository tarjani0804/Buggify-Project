const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  rsrc_id: {
    type: String
  },
  username: {
    type: String
  },
  country: {
    type: String
  },
  impact: {
    type: String
  }
});

const LeaderboardDB = mongoose.model("LeaderBoardDB", leaderboardSchema);
module.exports = LeaderboardDB;
