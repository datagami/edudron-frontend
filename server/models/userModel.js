const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        index: true,
        unique: [true, 'Phone number already exists'],
      },
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
  
    email: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default: 'https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg'
    },
    live: {
        type: Boolean,
        default: false
    },
    role: {type: String, default: 'user'},
    gender: {type: String, default: 'male'},
    fcmToken:{type:String},
    country:{type:String},
    state:{type:String},
    city:{type:String},
    course:{type:String},
    coverImg:{type:String},
    profileTitle:{type:String, default: null},
    followers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    blockUser: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    following: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    experience: [{ type: mongoose.Types.ObjectId, ref: 'user'}],
    Education:[{
        id:{type: mongoose.Types.ObjectId},
        school: String,
      degree: String,
      field_of_study: String,
      userId: String,
      start_date: Date,
      end_date: Date,
      grade:{type:String,uppercase:true}
    }]
   
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})
userSchema.virtual('isFollow', {
    ref: 'user',
    localField: 'following._id',
    foreignField: '_id',
    justOne: true,
  });
  userSchema.virtual('exp', {
    ref: 'Experience',
    localField: 'experience._id',
    foreignField: '_id',

  });
  
 

module.exports = mongoose.model('user', userSchema)