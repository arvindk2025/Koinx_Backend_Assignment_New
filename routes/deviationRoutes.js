const express = require('express');
const { getDeviation } = require('../controllers/deviationController');

const router = express.Router();

// Get the standard deviation of cryptocurrency prices
router.get('/deviation', getDeviation);

module.exports = router;
