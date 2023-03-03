const { text } = require('express')
const mongoose = require('mongoose')

const scopeSchema = new mongoose.Schema({
    buss_id: {
        type: String,
        required: true
    },
    in_scope: [
        {
            one: {
                type: String,
            },
            two: {
                type: String,
            },
            three: {
                type: String,
            },
            four: {
                type: String,
            },
            five: {
                type: String,
            },
            six: {
                type: String,
            },
            seven: {
                type: String,
            },
            eight: {
                type: String,
            },
            nine: {
                type: String,
            },
            ten: {
                type: String,
            }
        }
    ],
    out_scope: [
        {
            one: {
                type: String,
            },
            two: {
                type: String,
            },
            three: {
                type: String,
            },
            four: {
                type: String,
            },
            five: {
                type: String,
            },
            six: {
                type: String,
            },
            seven: {
                type: String,
            },
            eight: {
                type: String,
            },
            nine: {
                type: String,
            },
            ten: {
                type: String,
            }
        }
    ]
})


const ScopeDB = mongoose.model('ScopeDB', scopeSchema)
module.exports = ScopeDB