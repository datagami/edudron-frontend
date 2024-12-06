const CollegesDomain=require('../models/Social/college admin/all_colleges_do/co_list');

const allCollegesList={
    getCollegeList: async (req, res) => {
        try {
           const result = await CollegesDomain.find({});
           res.json({data:result,status:true})  
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    addCollegeList: async (req, res) => {
       try {
        let insert =await CollegesDomain({
            domains:['fghj'],
    country:'String',
    alpha_two_code:'String',
    web_pages:['ghj'],
    "state-province":'String',
    name:'String',
        })
        const result=await insert.save();
        res.json(result)
       } catch (error) {
        res.status(500).json(error.message)
       }
    },
}
 module.exports = allCollegesList