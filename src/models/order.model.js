const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    table_no: {
      type: String,
      trim: true,
    },
    order_in_time: {
      type: String,
      trim: true,
    },
    order_out_time: {
      type: String,
      trim: true,
    },
    table_charge: {
      type: Number,
      trim: true,
    },
    order_amount: {
      type: Number,
      trim: true,
    },
    customer_id: {
      type: String,
      trim: true,
    },
    customer_name: {
      type: String,
      trim: true,
    },
    customer_phone: {
      type: Number,
      trim: true,
    },
    customer_gender: {
      type: String,
      trim: true,
    },
    payment_mode: {
      type: String,
      trim: true,
    },
    order_code: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      trim: true,
    },
    total_price: {
      type: Number,
      trim: true,
    },
    order_date: {
      type: Date,
      trim: true,
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
