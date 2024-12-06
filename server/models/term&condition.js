const mongoose=require("mongoose");

const termSchema=new mongoose.Schema({
    term:String
});

module.exports=mongoose.model('TermCondition',termSchema);