const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const CustomerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    phone: {
      type: Number,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

CustomerSchema.plugin(toJSON);
CustomerSchema.plugin(paginate);

const Customer = mongoose.model('customers', CustomerSchema);

module.exports = Customer;
