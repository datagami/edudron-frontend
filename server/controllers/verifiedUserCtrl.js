const Users = require('../models/userModel')
const VerifiedUser = require('../models/verifiedUserModel')

const { uploadFile, uploadVideo } = require("../s3")

const AWS_folder = "verification/"






const verifiedUserCtrl = {
    requestVerification:async (req,res)=>{
       try {
        const {aboutMe  , url1 , url2} = req.body
        const file = req.files[0]
        uploadResult = await uploadFile(file, AWS_folder)
        const image = uploadResult.Location
        console.log(uploadResult)
        console.log(image)
        const verification = new VerifiedUser({
            aboutMe , govIdImg:image , url1 ,url2 , user:req.user._id
        })

        await verification.save()
        res.json({msg:"Request Sent" , verification})
       } catch (error) {
        return res.status(500).json({msg: error.message})
       }
    },
    getVerificationReq : async(req,res) =>{
        try {
            const allReq =await VerifiedUser.find({ isVerified:false })
             
            res.json({allReq})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    confirmVerification : async(req,res) =>{
        try {
            const user = req.params.id

            const verification = await VerifiedUser.findOneAndUpdate({user:user},
                {
                    isVerified:true
                }     
            )

            res.json({verification})

        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    removeVerification: async(req,res) =>{
        try {
            
            const user = req.params.id

            const verification = await VerifiedUser.findOneAndUpdate({user:user},
                {
                    isVerified:false
                }     
            )

            res.json({verification})

        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
}


module.exports = verifiedUserCtrl