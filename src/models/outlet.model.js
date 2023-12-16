const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    outlet_code: {
      type: String,
      trim: true,
    },
    user_code: {
      type: String,
      trim: true,
    },
    rest_type: {
      type: Number,
      trim: true,
    },
    status: {
      type: Number,
      trim: true,
      require: true,
    },
    price: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
      require: true,
    },
    landmark: {
      type: String,
      require: true,
      trim: true,
    },
    longitude: {
      type: String,
      require: true,
      trim: true,
    },
    latitude: {
      type: String,
      trim: true,
      require: true,
    },
    contact_number: {
      type: Number,
      trim: true,
      require: true,
    },
    serving_type: {
      type: Array,
      require: true,
      trim: true,
    },
    logo: {
      type: Array,
      trim: true,
    },
    rest_photos: {
      type: Array,
      require: true,
    },
    rest_menus: {
      type: Array,
      trim: true
    },
    open_time: {
      type: String,
      trim: true
    },
    close_time:{
      type: String,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

const Outlet = mongoose.model('outlets', userSchema);

module.exports = Outlet;
