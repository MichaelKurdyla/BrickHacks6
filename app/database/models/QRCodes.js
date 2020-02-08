const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QRSchema = new Schema({
  AuthToken: {
    type: String,
    required: true
  },
  Points: {
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
    default: True
  }
});

module.exports = User = mongoose.model("users", QRSchema);
