const mongoose =require('mongoose');


const miscSchema=new mongoose.Schema({
    name:{type:String},
    logo:{type:String},
    about:{type:String},
    email:{type:String},
    phone:{type:String},
},{
      timestamps:true
  });


module.exports=mongoose.model('Misc',miscSchema);