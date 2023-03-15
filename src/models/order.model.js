const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,  // veg nonveg
      required: true,
      trim: true,
    },
    status: {
      type: String,  // veg nonveg
      required: true,
      trim: true,
    },
    price: {
      type: Number,  // veg nonveg
      required: true,
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
