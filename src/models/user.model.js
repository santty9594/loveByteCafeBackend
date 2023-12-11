const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
    isNewUser: {
      type: Boolean,
      default: false,
    },
    user_type: {
      type: Number, // 1 for vendor app 2 for user 3 for delivery app
      default: 1,
    },
    phone: {
      type: Number,
      required: true,
      default: 0,
    },
    phoneOtp: {
      type: String,
    },
    adharCard: {
      type: String,
      default: '',
    },
    panCard: {
      type: String,
      default: '',
    },
    hotelLicense: {
      type: String,
      default: '',
    },
    drivingLicense: {
      type: String,
      default: '',
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


userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10); // 10 is the number of rounds for hashing
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw err;
  }
};

const User = mongoose.model('User', userSchema);
module.exports = User;
