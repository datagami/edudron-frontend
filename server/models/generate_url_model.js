const mongoose=require('mongoose');


const generateUrlScema=mongoose.Schema({
    url:String
});


module.exports=mongoose.model("GenerateUrl",generateUrlScema);