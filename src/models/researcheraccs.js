const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')
const hasher = require('../routes/generator');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: [true, "Email is Already in use."]
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    accepted_terms: {
        type: Boolean,
        required: true
    },
    isAgree: {
        type: Boolean,
        required: true
    },
    rsrc_id: {
        type: String,
        required: true,
        minlength: 9
    },
    tokens:[
        {
            token:{
                    type: String,
                    required:true
                }
        }
    ]
})



userSchema.pre('save', function (next) {
          if (this.isModified('password')) {
                    this.password = hasher(this.password)
          }
          next()
})

userSchema.methods.generateAuthToken = async function() {
          try {
                    let token = jwt.sign({_id:this._id},"BUGGIFYISCOLLECTIVEPROJECTOFTUSHARTARJANIANDJAY")
                    this.tokens = this.tokens.concat({token: token})
                    await this.save();
                    return token;
          } catch (err) {
                    console.log(err);
          }
}

const Rsrc = mongoose.model('Rsrc',userSchema)
module.exports = Rsrc;