const mongoose =require('mongoose');


const addExamsSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    streamId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'AddStream'},
    courseId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'AddCourse'},
    categoryId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'AddCategory'},
    status:{type:Boolean,required:true,default:false},
    exam_pic:{type:String}
},{
    timestamps:true
});


module.exports=mongoose.model('Exams',addExamsSchema);