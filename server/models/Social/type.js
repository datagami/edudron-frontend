const mongoose = require('mongoose')
require('../../server')

const typeSchema = new mongoose.Schema({
    value: {
        type: String
    },
    order: {
        type: Number
    }
    // type: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     require:true,
    //     ref:"Type"
    // }
})

const Type = mongoose.model('Type',typeSchema)
module.exports = Type