const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    menu_id: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    menu_type: {
      type: String,
      trim: true,
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
