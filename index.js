require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const statsRoutes = require('./routes/statsRoutes');
const deviationRoutes = require('./routes/deviationRoutes');
require('./utils/scheduler'); 


const app = express();
app.use(express.json());


connectDB();

// Define routes
app.use('/', statsRoutes);       
app.use('/', deviationRoutes);  

app.get("/health", (req, res) => res.send("healthy"))

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
