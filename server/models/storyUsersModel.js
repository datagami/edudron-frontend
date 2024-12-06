const mongoose = require('mongoose')









const storyUserSchema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, ref: 'user'},
    completeseen: [{type:mongoose.Types.ObjectId , ref:'user'}],
    exptime : { type : Date, default: Date.now },
    laststory: mongoose.Types.ObjectId,
}, {
    timestamps: true
})

storyUserSchema.index({ "exptime": 1 }, { expireAfterSeconds:86400 }); // 3600 = 1 hour 
// mongo runs the process every 60sec
// after each expireAfterSeconds change drop the collection to make it work
 
module.exports = mongoose.model('storyUser', storyUserSchema)