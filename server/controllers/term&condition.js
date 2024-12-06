const TermCondition=require('../models/term&condition')
const term_condition={
    add_term:async (req,res)=>{
            try {
                const insert=await TermCondition(req.body);
            const result= await insert.save();
            res.json({status:201,data:result})
            } catch (error) {
               res.status(500).json({message:error.message}) 
            }
    },
    get_term:async (req,res)=>{
        try {
            const result=await TermCondition.find();
            res.json({status:true,data:result})
        } catch (error) {
           res.status(500).json({message:error.message}) 
        }
},
};

module.exports=term_condition;