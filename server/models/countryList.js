const mongoose =require('mongoose');


const countryListSchema=new mongoose.Schema({
    id:{type:Number},
    name:{type:String,required:true},
});


module.exports=mongoose.model('country-list',countryListSchema);