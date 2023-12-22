const { Schema, model } = require('mongoose');

const accountSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Email must be valid']
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    poems: [
        {
            type: String,
            trim: true,
        },
    ],
});

const Account = model('Account', accountSchema);

module.exports = Account;