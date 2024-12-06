const mongoose =require('mongoose');


const addFacultySchema=new mongoose.Schema({
      user_id:{type:mongoose.Schema.Types.ObjectId,required:true},
      name:{type:String,trim:true,required:true},
      post:{type:String,required:true},
      email:{type:String,required:true},  
      phone:{type:String,required:true},
      collegeId:{type:mongoose.Schema.Types.ObjectId,required:true},
      status:{type:Boolean,required:true,default:false},
},{
    timestamps:true
});


module.exports=mongoose.model('AddFaculty',addFacultySchema);