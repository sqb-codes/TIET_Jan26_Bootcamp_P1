const { createClient } = require('redis');

let client;

const connectRedis = async () => {
  try {
    client = createClient({ url: process.env.REDIS_URL || 'redis://127.0.0.1:6379' });
    client.on('error', (err) => console.error('Redis Client Error', err));
    await client.connect();
    console.log('Redis connected successfully...');
  } catch (error) {
    console.error('Redis connection failed...', error.message);
    // don't exit process; cache is optional
  }
};

const getRedisClient = () => {
  if (!client) throw new Error('Redis client not initialized');
  return client;
};

module.exports = {
  connectRedis,
  getRedisClient,
};
