const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  buss_id: {
    type: String,
    required: true,
    unique: true,
  },
  stats: {
    monthly_report: {
      type: Number,
      required: true,
    },
    monthly_paid: {
      type: Number,
      required: true,
    },
    avg_paid: {
      type: Number,
      required: true,
    },
    mmm_reports: {
      type: Number,
      required: true,
    },
    mmm_paid: {
      type: Number,
      required: true,
    },
    mmm_avg: {
      type: Number,
      required: true,
    },
  },
  report_counts: {
    open: {
      type: Number,
      required: true,
    },
    resolved: {
      type: Number,
      required: true,
    },
  },
  report_cvss: {
    NA: {
      type: Number,
      required: true,
    },
    dups: {
      type: Number,
      required: true,
    },
    info: {
      type: Number,
      required: true,
    },
    medium: {
      type: Number,
      required: true,
    },
    high: {
      type: Number,
      required: true,
    },
    critical: {
      type: Number,
      required: true,
    },
  },
});

const BussStats = mongoose.model("BussStats", statsSchema);
module.exports = BussStats;
