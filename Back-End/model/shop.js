const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "Seller",
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Shop', shopSchema)

