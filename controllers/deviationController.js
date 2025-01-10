const Crypto = require('../models/cryptoModel');

// Calculate standard deviation for a specific cryptocurrency (Task 3)
const getDeviation = async (req, res) => {
  const { coin } = req.query;
  const allowedCoins = ['bitcoin', 'matic-network', 'ethereum'];

  if (!allowedCoins.includes(coin)) {
    return res.status(400).json({ error: 'Invalid coin' });
  }

  try {
    const prices = await Crypto.find({ coin_id: coin }).sort({ timestamp: -1 }).limit(100).select('current_price');
    if (prices.length === 0) {
      return res.status(404).json({ error: 'Not enough data to calculate deviation' });
    }

    // Extract price values
    const priceValues = prices.map(p => p.current_price);

    // Calculate standard deviation
    const mean = priceValues.reduce((a, b) => a + b, 0) / priceValues.length;
    const variance = priceValues.reduce((sum, p) => sum + Math.pow(p - mean, 2), 0) / priceValues.length;
    const deviation = Math.sqrt(variance);

    res.json({ deviation: deviation.toFixed(2) });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getDeviation };
