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
      type: String, 
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

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const Menu = mongoose.model('menus', userSchema);

module.exports = Menu;
