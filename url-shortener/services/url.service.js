// Service layer
const repository = require("../repositories/url.repository");
const base62 = require("../utils/base62");

exports.createShortUrl = async (originalUrl) => {
    const id = await repository.create(originalUrl);

    const shortCode = base62.encode(id);
    await repository.updateCode(id, shortCode);

    return {shortUrl: `http://localhost:3000/api/url/${shortCode}`}
}

exports.getOriginalUrl = async (code) => {
    const data = await repository.findByCode(code);
    if(!data) throw new Error ("URL not found...");
    return data.originalUrl;
}