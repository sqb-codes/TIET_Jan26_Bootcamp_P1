// Responsible for:
// 1. Express app initialization
// 2. Middleware setup
// 3. Route definitions

const express = require('express');
const urlRoutes = require('./routes/url.routes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Register Routes
app.use('/api/urls', urlRoutes);

// Global Error Handling Middleware
const errorMiddleware = require('./middlewares/error.middleware');
app.use(errorMiddleware);

module.exports = app;