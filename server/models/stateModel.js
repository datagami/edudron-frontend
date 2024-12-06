const mongoose =require('mongoose');


const stateListSchema=new mongoose.Schema({
    id:{type:Number},
    name:{type:String,required:true},
    country_id:{type:Number},
    country_name:{type:String}
});


module.exports=mongoose.model('state-list',stateListSchema);