const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    purchases: [
      {
        qr_code: {
          type: String,
          required: true
        },
        returned: {
          type: Boolean,
          required: true
        },
        point_value: {
          type: Number,
          required: true
        }
      }
    ]
  }
});

module.exports = User = mongoose.model("users", UserSchema);
