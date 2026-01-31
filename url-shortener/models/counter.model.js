const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema({
    name: {type: String, require: true},
    value: {type: Number, default: 0}
});

module.exports = mongoose.model("Counter", CounterSchema);