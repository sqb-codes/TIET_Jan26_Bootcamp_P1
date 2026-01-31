// Only routing, no logic

const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url.controller');

// Route to create a short URL
router.post('/shorten', urlController.shortenUrl);

// Route to redirect to the original URL
router.get('/:code', urlController.redirectUrl);

module.exports = router;