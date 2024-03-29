const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },

    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model("User", userSchema);