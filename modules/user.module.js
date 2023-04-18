const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
}, {
    timestamps: true
});

module.exports.userModel = mongoose.model('user', schema);