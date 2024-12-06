const mongoose = require('mongoose');
//   const { Schema } = mongoose;
const experienceSchema = new mongoose.Schema(
  {
        user_id:{type: mongoose.Types.ObjectId},
        company: String,
        role: String,
        start_date:Date,
        end_date:Date,
        city:String,
        state:String,
        currently_working:{type:Boolean,default:false},
        country:String,
        skills:[],
        work_as:String
      },

{
    timestamps:true,
    toJSON: { virtuals: true }
},

  );
 

  module.exports = mongoose.model('Experience', experienceSchema);

