const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    issuer: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Report', reportSchema)

