// Single Responsibility Principle
const app = require('./app');
const connectDB = require("./config/db");
const { connectRedis } = require("./config/redis");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

connectDB();
// Attempt to connect Redis (non-fatal)
connectRedis().catch((err) => console.error('Redis init error', err.message));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});