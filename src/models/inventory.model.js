const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const InventorySchema = mongoose.Schema({
    name: {
      type: String,
      trim: true,
    },
    inventory_code:{
      type: String,
      trim: true,
    },
    created_date: {
      type: Date,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

InventorySchema.plugin(toJSON);
InventorySchema.plugin(paginate);

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;
