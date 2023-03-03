const mongoose = require('mongoose')

const rewardSchema = new mongoose.Schema({
    buss_id: {
        type: String,
        required: true
    },
    information: {
        type: String
    },
    low: {
        type: String
    },
    high: {
        type: Number
    },
    medium: {
        type: String
    }
})

const RewardDB = mongoose.model('REWARDDB', rewardSchema)
module.exports = RewardDB