const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    photos: [
        {
            url: {
                type: String,
                required: true
            },
            description: String
        }
    ],
});

module.exports = Product = mongoose.model("Product", productSchema);