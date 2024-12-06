const mongoose =require('mongoose');


const addCourseSchema=new mongoose.Schema({
      name:{type:String,trim:true,required:true},
      streamId:{type:mongoose.Schema.Types.ObjectId,ref:'AddStream',required:true},
      categoryId:{type:mongoose.Schema.Types.ObjectId, ref:'AddCategory', required:true},
      course_pic:{type:String ,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkpe7fx8_5lBjpbi2FZRnrfU18u5OGB0O-6-p47-u0yg&usqp=CAU&ec=48600112"},
    //   fees:{type:Number},
    //   eligibility:{type:String,required:true,trim:true},
      status:{type:String,default:"0"},
},{
    timestamps:true
});


module.exports=mongoose.model('AddCourse',addCourseSchema);