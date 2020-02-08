const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  AuthToken: {
    type: String,
    required: true
  },
  Amount: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  whenUsed: {
    type: Date
  },
  validCode: {
    type: Boolean,
    default: false
  }
});

module.exports = User = mongoose.model("users", UserSchema);
