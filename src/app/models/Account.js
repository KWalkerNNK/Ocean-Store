const mongoose = require('mogoose');
const Schema = mongoose.Schema;

const Account = new Schema(
    {
        name: { type: String, maxLength: 50, required: true },
        email: { type: String, maxLength: 70, required: true },
        phone: { type: String, maxLength: 11, required: true },
        address: { type: String, maxLength: 255, required: true },
        password: { type: String, maxLength: 70, required: true },
        regency: {type: Boolean, default: 'User'},
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Account Schema', Account);