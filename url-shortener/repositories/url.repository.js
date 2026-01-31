const Url = require("../models/url.model");
const Counter = require("../models/counter.model");

const getNextId = async () => {
    const counter = await Counter.findOneAndUpdate(
        {name: "url_counter"},
        {$inc: {value: 1}},
        {new: true, upsert: true}
    )
    return counter.value;
}

exports.create = async (originalUrl) => {
    const numeric_id = await getNextId();

    // save original URL to mongoDB
    await Url.create({
        _id: numeric_id,
        originalUrl
    });
    return numeric_id;
}

exports.updateCode = async(id, code) => {
    // update the existing code
    return Url.updateOne({_id: id}, {shortCode: code});
}

exports.findByCode = async (code) => {
    // search document by shortCode, to get the original URL
    return Url.findOne({shortCode: code});
}