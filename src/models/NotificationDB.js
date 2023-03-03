const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    buss_id: {
        type: String,
        required: true
    },
    rsrc_id: {
        type: String
    },
    report_num: {
        type: Number,
        required: true
    }
})

const NotificationDB = mongoose.model('NOTIFICATIONDB', notificationSchema)
module.exports = NotificationDB