const axios = require('axios');
const Crypto = require('../models/cryptoModel');

// Fetch and store cryptocurrency data (Task 1)
const fetchDataAndStore = async (req, res) => {
  try {
    // Fetch data from CoinGecko API
    const headers = {
      'accept': 'application/json',
      'x-cg-demo-api-key': 'CG-T1c2NcYFzpccup4HDr5kU3TF'
    };
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,matic-network,ethereum'
      },
      headers
    });

    // Extract relevant data
    const data = response.data.map(coin => ({
      coin_id: coin.id,
      coin: coin.name,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      price_change_24h: coin.price_change_24h
    }));

    // Save data to MongoDB
    await Crypto.insertMany(data);
  } catch (error) {
    console.error('Error fetching or saving data:', error);
  }
};

module.exports = { fetchDataAndStore };
