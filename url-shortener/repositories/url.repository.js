const Url = require("../models/url.model");

exports.create = async (originalUrl) => {
    // save original URL to mongoDB
    const doc = await Url.create({originalUrl});
    return doc._id;
}

exports.updateCode = async(id, code) => {
    // update the existing code
    return Url.findByIdAndUpdate(id, {shortCode: code});
}

exports.findByCode = async (code) => {
    // search document by shortCode, to get the original URL
    return Url.findOne({shortCode: code});
}