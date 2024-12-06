const OrganisationFilters=require('../models/Social/college admin/filters')
const organisationFiltersCtrl = {
    getCollege: async (req, res) => {
        try {
          if(req.query.search){
            const result=await OrganisationFilters.find({
                $or: [
                    {
                      $and: [
                        {
                          course: {
                            $elemMatch: { name: req.query.search.split(",") },
                          },
                        },
                      ],
                    },
                    {
                        $and: [
                          {
                            state: {
                              $elemMatch: { name: req.query.search.split(",") },
                            },
                          },
                        ],
                      },
                      {
                        $and: [
                          {
                            stream: {
                              $elemMatch: { name: req.query.search.split(",") },
                            },
                          },
                        ],
                      },
                  ],
               })
               res.send({status:true,data:result})
          }else{
            const result=await OrganisationFilters.find({ })
            res.send({status:true,data:result})
          }
           
           
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    addCollege: async (req, res) => {
        try {
           const insert=await OrganisationFilters(req.body);
           const result=await insert.save()
           res.send({status:true,data:result})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
module.exports=organisationFiltersCtrl;