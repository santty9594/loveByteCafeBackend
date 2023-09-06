const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    customer_id: {
      type: String,
      trim: true,
    },
    customer_name: {
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
