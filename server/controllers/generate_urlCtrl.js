const GenerateUrl=require('../models/generate_url_model');
const { uploadFile } = require("../s3");
const AWS_folder = "media/";

const createUrl={
    create_url:async(req,res)=>{
         try{
            console.log(req.files);
            console.log(req.file);
            const file = req.files?.map(async (v, key) => {
                uploadResult = await uploadFile(v, AWS_folder);
        
                return await uploadResult.Location;
              })
              const imageUrls = await Promise.all(file);
              res.json({data:imageUrls})
         }catch(err){
            res.status(500).json(err.message)
         }
    }
};

module.exports=createUrl;