const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const hasher = require("../routes/generator");
require("dotenv").config();

const KEY = process.env.SECRET_KEY;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is Already in use."],
  },
  password: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  accepted_terms: {
    type: Boolean,
    required: true,
  },
  typeofProgram: {
    type: String,
    required: true,
  },
  buss_id: {
    type: String,
    required: true,
    minlength: 9,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = hasher(this.password);
  }
  next();
});

userSchema.methods.generateAuthToken = async function() {
  try {
    let token = jwt.sign({ _id: this._id }, KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Buss = mongoose.model("Buss", userSchema);
module.exports = Buss;
