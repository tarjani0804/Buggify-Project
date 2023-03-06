const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
    report_id: {
        type: String,
        required: true,
        unique: true
    },
    rsrc_id: {
        type: String,
        required: true
    },
    buss_id: {
        type: String,
        required: true
    },
    report_title:{
        type: String,
        required: true
    },
    reproduce_steps:{
        type: String,
        required: true
    },
    poc1: {
        type: String
    },
    poc2: {
        type: String
    },
    poc3: {
        type: String
    },
    poc4: {
        type: String
    },
    poc5: {
        type: String
    },
    attack_scenario:{
        type: String
    },
    remediation:{
        type: String
    },
    cvss:{
        type: String
    },
    note:{
        type: String
    },
    bounty:{
        type: String
    },
    payment_id:{
        type: String
    }
})

const ReportDB = mongoose.model("REPORTDB", ReportSchema)
module.exports = ReportDB;