const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SwapOrderSchema = new Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productOffered: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    productRequested: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
});

const SwapOrderModel = mongoose.model("SwapOrder", SwapOrderSchema);

module.exports = SwapOrderModel;
