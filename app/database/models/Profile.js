const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users"
    },
    username: {
      type: String,
      required: true
    },
    bio: {
      type: String
    },
    location: { type: String },
    education: {
      school: { type: String },
      degree: { type: String }
    },
    skills: [{ skill: { type: String }, level: { type: String } }],
    interests: [String],
    certificates: [
      {
        name: { type: String },
        date: { type: Date }
      }
    ],
    profileImage: {
      type: String,
      default: ""
    },
    wallet: {
      balance: { type: Number, default: 0 },
      transactions: [
        {
          date: { type: Date, default: Date.now() },
          method: String,
          amount: Number,
          item: { type: Schema.Types.ObjectId }
        }
      ]
    },
    created: {
      type: Date,
      default: Date.now()
    },
    updated: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

module.exports = UserProfile = mongoose.model(
  "user-profiles",
  UserProfileSchema
);
