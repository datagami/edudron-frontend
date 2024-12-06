const AddmissionQuery=require('../models/addmisionQueryModel')

const addmission_query_ctrl={
    createQuery: async (req, res) => {
        const{
            studentFullname,
            studentEmail,
            studentPhone,
            studentCity,
            studentCourse,
            collegeId,
            studentId
        }=req.body
        try {
           const insert = await AddmissionQuery({
            studentFullname,
            studentEmail,
            studentPhone,
            studentCity,
            studentCourse,
            collegeId,
            studentId
           });
           const result=await insert.save();
           res.json({status:true,message:'succesfull registered query'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    get_addmission_query: async (req, res) => {
        try {
           const result = await AddmissionQuery.find({}).populate({path:'studentId',select:'fullname phone email city'});
           res.json({data:result,status:true})  
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports=addmission_query_ctrl;