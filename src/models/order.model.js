const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    order_code: {
      type: String,
      trim: true,
    },
    outlet_code: {
      type: String,
      trim: true,
    },
    user_code: {
      type: String,
      require: true,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    total_price: {
      type: String,
      trim: true,
    },
    order_date: {
      type: Date,
      trim: true,
    },
    is_discount: {
      type: Boolean,
      trim: true,
    },
    discount_amount: {
      type: Number,
      trim: true,
    },
    delivery_agent_id: {
      type: Number,
      trim: true,
    },
    delivery_distance_in_km: {
      type: Number,
      trim: true,
    },
    delivery_changes: {
      type: String,
      trim: true,
    },
    discount_name: {
      type: String,
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
