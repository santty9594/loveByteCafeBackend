const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const userSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    is_new_user: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number, // 1 for vendor app 2 for user 3 for delivery app
      default: 1,
    },
    phone: {
      type: Number,
      unique: true,
      required: true,
      default: 0,
    },
    phoneOtp: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
      default: 'User'
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);


const User = mongoose.model('User', userSchema);
module.exports = User;
