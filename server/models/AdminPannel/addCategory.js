const mongoose =require('mongoose');


const addCategorySchema=new mongoose.Schema({
    name:{type:String,trim:true,required:true},
    description:{type:String,trim:true,required:true},
    banner:{type:String},
    parent:{type:String,required:true,},
    status:{type:String,default:"1"}
},{
    timestamps:true
});


module.exports=mongoose.model('AddCategory',addCategorySchema);