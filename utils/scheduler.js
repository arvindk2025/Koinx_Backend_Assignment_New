const cron = require('node-cron');
const { fetchDataAndStore } = require('../controllers/fetchDataController');

// Schedule the job to run every 2 hours
cron.schedule('0 */2 * * *', async () => {
  await fetchDataAndStore();
  console.log('Background job: Crypto data fetched and updated after 2 hours...');
});
