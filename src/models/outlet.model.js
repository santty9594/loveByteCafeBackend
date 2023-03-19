const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
      default: '',
    },
    phone: {
      type: Number,
      trim: true,
      default: 0,
    },
    landmark: {
      type: String,
      trim: true,
      default: '',
    },
    createdBy: {
      type: String,  // veg nonveg
      trim: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const Outlet = mongoose.model('outlets', userSchema);

module.exports = Outlet;
