const mongoose =require('mongoose');


const add_query_Schema= new mongoose.Schema({
        studentFullname:{type:String},
        studentEmail:{type:String},
        studentPhone:{type:String},
        studentCity:{type:String},
        studentCourse:{type:String},
        collegeId:{type:mongoose.Schema.Types.ObjectId,ref:'CollegeBasics',default:null},
        studentId:{type:mongoose.Schema.Types.ObjectId,ref:'user',default:null}
}, {
    timestamps: true
}
)

module.exports=mongoose.model('AddmissionQuery',add_query_Schema);