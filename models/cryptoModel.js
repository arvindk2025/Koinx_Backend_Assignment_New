const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
  coin_id: {
    type: String,
    required: true,
  },

  coin: {
    type: String,
    required: true,
  },

  current_price: {
    type: Number,
    required: true,
  },

  market_cap: {
    type: Number,
    required: true,
  },

  price_change_24h: {
    type: Number,
    required: true,
  },

  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Crypto = mongoose.model("Crypto", cryptoSchema);
module.exports = Crypto;
