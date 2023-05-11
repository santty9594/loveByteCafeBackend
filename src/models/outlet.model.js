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
      require: true,
      trim: true,
    },
    user_code: {
      type: String,
      require: true,
      trim: true,
    },
    rest_type: {
      type: Number,
      trim: true,
      require: true,
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
    long: {
      type: String,
      require: true,
      trim: true,
    },
    lat: {
      type: String,
      trim: true,
      require: true,
    },
    mobile_number: {
      type: Number,
      trim: true,
      require: true,
    },
    serving_type: {
      type: Number,
      require: true,
      trim: true,
    },
    logo: {
      type: String,
      trim: true,
    },
    rest_photos: {
      type: Array,
      require: true,
    },
    rest_menu: {
      type: String,
      trim: true
    },
    mon_start_time: {
      type: Number,
      require: true,
      trim: true,
    },
    mon_end_time: {
      type: Number,
      require: true,
      trim: true,
    },
    tue_start_time: {
      type: Number,
      require: true,
      trim: true,
    },
    tue_end_time: {
      type: Number,
      require: true,
      trim: true,
    },
    wed_start_time: {
      type: Number,
      require: true,
      trim: true,
    },
    wed_end_time: {
      type: Number,
      require: true,
      trim: true,
    },
    thu_start_time: {
      type: Number,
      require: true,
      trim: true,
    },
    thu_end_time: {
      type: Number,
      require: true,
      trim: true,
    },
    fri_start_time: {
      type: Number,
      require: true,
      trim: true,
    },
    fri_end_time: {
      type: Number,
      require: true,
      trim: true,
    },
    sat_start_time: {
      type: Number,
      require: true,
      trim: true,
    },
    sat_end_time: {
      type: Number,
      require: true,
      trim: true,
    },
    sun_start_time: {
      type: Number,
      require: true,
      trim: true,
    },
    sun_end_time: {
      type: Number,
      require: true,
      trim: true,
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
