const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    outlet_code: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    outof_stock: {
      type: Boolean,
      default: false,
      trim: true,
    },
    price: {
      type: String,
      require: true,
      trim: true,
    },
    dish_type: {
      type: Number,
      require: true,
      trim: true,
    },
    serving_count: {
      type: Number,
      trim: true,
    },
    category: {
      require: true,
      type: Number,
      trim: true,
    },
    dish_img: {
      type: Array,
      require: true
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
