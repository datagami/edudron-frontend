const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    recipients: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    text: String,
    type: String,
    media: Array,
    call: Object,
    isSeen:{
        type:Number,
        default:0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('conversation', conversationSchema)