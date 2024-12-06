const mongoose = require('mongoose')

const notifySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    user: {type: mongoose.Types.ObjectId, ref: 'user'}, // Who created notification
    recipients: [mongoose.Types.ObjectId], // people who will get the notificaton []
    url: String,                           // url that will open onClick eg. '/post/${post._id}'
    text: String,                          // eg. added new post
    content: String,                       // Can be caption of the post
    image: String,
    isRead: {type: Boolean, default: false}
}, {
    timestamps: true
})

module.exports = mongoose.model('notify', notifySchema)