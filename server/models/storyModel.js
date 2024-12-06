const mongoose = require('mongoose')







const storySchema = new mongoose.Schema({
    images: {
        type: String,
        required: true
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    exptime : { type : Date, default: Date.now },
    seen_users:[{type:mongoose.Types.ObjectId , ref:'user'}],
    user: {type: mongoose.Types.ObjectId, ref: 'user'}
}, {
    timestamps: true 
})

storySchema.index({ "exptime": 1 }, { expireAfterSeconds: 86400 });

module.exports = mongoose.model('story', storySchema)