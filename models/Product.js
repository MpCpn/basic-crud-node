const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    desc: String,
    price: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);