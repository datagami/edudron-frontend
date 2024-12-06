const mongoose = require('mongoose')


const collegeAdminSchema = new mongoose.Schema({
   user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
   college_name: { type: String, required: true },
   email: { type: String, required: false },
   phone: { type: String, required: false },
   est_year: { type: String, required: false },
   ugc_approved: { type: String, required: false },
   description: { type: String, required: false },
   college_pics: {
      type:[String],
      default:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhDH-Dbx2rsO-D1r2tBHjOSI45POI4AZ0aLgFpHvabIalwW8unFJyXqMxruRYnddLFTodAi-lFBQ&usqp=CAU&ec=48600112"]
   } ,
   web_url:{type:String},
   city: {
      city:{type:String},
      cityId:{type:Number}
   },
   state: {
      state:{type:String},
      stateId:{type:Number}
   },
   country: {
      country:{type:String},
      countryId:{type:Number}
   },
   course: [],
   streamId:{type:mongoose.Schema.Types.ObjectId,ref:"AddStream"},
   exams: [{
      name: { type: String },
      examId: { type: mongoose.Schema.Types.ObjectId, ref: 'AddExams' },
      status: { type: Boolean },
   }],
   facilities: [{
      name: { type: String },
      facilitiyId: { type: mongoose.Schema.Types.ObjectId },
      status: { type: Boolean },
   }],
   faculty: [{
      name: { type: String, },
      post: { type: String, },
      email: { type: String, },
      phone: { type: String }
   }],
})





const CollegeBasics = mongoose.model('CollegeBasics', collegeAdminSchema)
module.exports = CollegeBasics