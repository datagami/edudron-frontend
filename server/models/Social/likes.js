const mongoose = require('mongoose')
require('../../server')

const likesSchema = new mongoose.Schema({
    astro_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Astrologer_detail"
    },
    member_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Member_detail"
    },
    user_type:{
        type: String
    },
    resource_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    resource_type:{
        type: String
    }
})

const Likes = mongoose.model('Like', likesSchema)
module.exports = Likes