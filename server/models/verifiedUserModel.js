const mongoose = require('mongoose')

const officialUserSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
    aboutMe:{type:String},
    govIdImg:{type:String},
    url1:{type:String},
    url2:{type:String},
    isVerified:{type: Boolean , default:false}
}, {
    timestamps: true
})

module.exports = mongoose.model('officialUser', officialUserSchema)