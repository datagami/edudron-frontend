const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    user_id: {type: mongoose.Types.ObjectId, ref: 'user'},
    media_url: {
        type: String,
        default: null
    },
    posting_us: {
        type: String,
        enum : ['user','admin','group','organization'],
        default: 'user'
    },
    post_us_id: {type: mongoose.Types.ObjectId},
    share_to: {
        type: String,
        enum : ['anyone','connection','group'],
        default: 'user'
    },
    group_id: {
        type: {type: mongoose.Types.ObjectId},
    },
    can_comment: {
        type: Boolean,
        default: true
    },
    description: {
        type: String
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    deleted_at: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
})
// postSchema.virtual('likeBy', {
//     ref: 'user',
//     localField: 'likes._id',
//     foreignField: '_id',
//   });

const Posts = mongoose.model('Post', postSchema)
module.exports = Posts