const urlService = require("../services/url.service");

exports.shortenUrl = async (req, res, next) => {
    try {
        const originalUrl = req.body.originalUrl;
        const result = await urlService.createShortUrl(originalUrl);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

exports.redirectUrl = async (req, res, next) => {
    try {
        const original = await urlService.getOriginalUrl(req.params.code);
        res.redirect(original);
    } catch (error) {
        next(error);
    }
}