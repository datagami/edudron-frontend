const mongoose = require('mongoose')







const highlightSchema = new mongoose.Schema({

    storyData:[{
        userStoryId:{type: mongoose.Types.ObjectId},
        image:{type:String},
        date:{ type : Date},
    }],
    title:{type:String},
    coverImg:{type:String},
    user: {type: mongoose.Types.ObjectId, ref: 'user'}

})


module.exports = mongoose.model('highlight', highlightSchema)