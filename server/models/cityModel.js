const mongoose =require('mongoose');


const cityListSchema=new mongoose.Schema({
    id:{type:Number},
    name:{type:String,required:true},
    country_id:{type:Number},
    state_id:{type:Number},
    country_name:{type:String}
});


module.exports=mongoose.model('city-list',cityListSchema);