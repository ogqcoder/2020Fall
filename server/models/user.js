const mongoose = require("mongoose");

var Schema = mongoose.Schema({
    firstname: {
        required: true,
        type: String,
    },
    lastname: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    username: {
        required: true,
        type: String,
    },
    password: {
        type: String,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", Schema);
