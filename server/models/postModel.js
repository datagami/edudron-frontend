const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user_id: {type: mongoose.Types.ObjectId, ref: 'user'},
    media_url: {
        type: Array,
        default: null
    },
    posting_us: {
        type: String,
        enum : ['user','admin','group','organization'],
        default: 'user'
    },
    post_us_id: {
        type: Number,
    },
    share_to: {
        type: String,
        enum : ['anyone','connection','group'],
        default: 'user'
    },
    group_id: {
        type: Number,
        default: null
    },
    can_comment: {
        type: Boolean,
        default: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('post', postSchema)