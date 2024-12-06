const mongoose = require('mongoose')
require('../../server')

const catSchema = new mongoose.Schema({
    value: {
        type: String
    },
    order: {
        type: Number
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Type"
    }
})

const Category = mongoose.model('Category',catSchema)
module.exports = Category