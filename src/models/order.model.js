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
    },
    status: {
      type: String, 
      trim: true,
    },
    price: {
      type: Number,  // veg nonveg
      trim: 0,
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

const Order = mongoose.model('orders', userSchema);

module.exports = Order;
