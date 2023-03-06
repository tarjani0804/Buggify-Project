const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema({
    buss_id: [String],
    rsrc_id: String
  }, {
    timestamps: true
  });

const BookmarkDB = mongoose.model("BOOKMARKDB", bookmarkSchema);
module.exports = BookmarkDB;
