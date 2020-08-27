const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

var Account = mongoose.model('Account', userSchema);

module.exports = Account;