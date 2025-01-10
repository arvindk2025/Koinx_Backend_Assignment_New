const Crypto = require('../models/cryptoModel');

// Get the latest stats for a specific cryptocurrency (Task 2)
const getStats = async (req, res) => {
  const { coin } = req.query;
  const allowedCoins = ['bitcoin', 'matic-network', 'ethereum'];

  if (!allowedCoins.includes(coin)) {
    return res.status(400).json({ error: 'Invalid coin' });
  }

  try {
    const latestData = await Crypto.findOne({ coin_id: coin }).sort({ timestamp: -1 });
    if (!latestData) {
      return res.status(404).json({ error: 'No data found for the requested coin' });
    }

    res.json({
      price: latestData.current_price,
      marketCap: latestData.market_cap,
      '24hChange': latestData.price_change_24h,

    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getStats };
