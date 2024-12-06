const mongoose = require('mongoose')
require('../../server')

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
   
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
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
    },
    parent_id:{
        type: mongoose.Schema.Types.ObjectId,
    }
},{timestamps:true})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment