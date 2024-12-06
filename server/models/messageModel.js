const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    conversation: { type: mongoose.Types.ObjectId, ref: 'conversation' },
    sender: { type: mongoose.Types.ObjectId, ref: 'user' },
    recipient: { type: mongoose.Types.ObjectId, ref: 'user' },
    type: String,
    text: String,
    url:String,
    emoji:String,
    media: Array,
    call: Object,
    isSeen:{
        type:Number,
        default:0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('message', messageSchema)