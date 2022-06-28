const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    attributes:  [
        { type: Schema.Types.ObjectId, ref: "Attribute" }
    ],
    date_added: {
        type: Date,
        required: true,
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: "Shop",
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Product', productSchema)

