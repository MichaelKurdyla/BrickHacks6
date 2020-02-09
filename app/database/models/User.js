const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QRCode = require('./QRCode').schema;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  updated: {
    type: Date,
    default: Date.now()
  },
  emailData: {
    token: {
      type: String
    },
    passwordToken: {
      type: String
    },
    verified: {
      type: Boolean,
      default: false
    }
  },
  points: {
    balance: {
      type: Number,
      default: 0
    },
    purchases: {type: [QRCode]},
  },
  purchases: [
    {
      name: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
