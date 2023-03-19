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
      type: String,  // veg nonveg
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

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const Menu = mongoose.model('menus', userSchema);

module.exports = Menu;
