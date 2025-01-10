const express = require('express');
const { getStats } = require('../controllers/statsController');

const router = express.Router();

// Get the latest stats of a cryptocurrency
router.get('/stats', getStats);

module.exports = router;