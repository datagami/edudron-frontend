const UploadMail = require('../models/upload_mail.model');


const createMail = async (req, res) => {
  try {
      console.error(res.body,'bode')
    const { mail_type, weight, length, width, height ,user, assingn_status, pickup_type} = req.body;
    const { filename, destination ,originalname} = req.file;
    const imageUrl = "/"+destination+"/"+filename+"."+originalname.split(".")[1];

    const generatedNumbers = new Set();

function generateUniqueNumber(a) {
  let uniqueNumber;
  do {
    uniqueNumber = Math.floor(1000 + Math.random() * a);
  } while (generatedNumbers.has(uniqueNumber));
  
  generatedNumbers.add(uniqueNumber);
  return uniqueNumber;
}

const myUniqueNumber = generateUniqueNumber(9000);


    const newMail = new UploadMail({
      user,
      mail_type,
      mail_box_num:myUniqueNumber,
      weight,
      length,
      width,
      height,
      mail:imageUrl,
      assingn_status,
      pickup_type
    });

   

    const savedMail = await newMail.save();

    res.status(201).json({status:true,msg:"Successfully uploaded",data:savedMail});
  } catch (error) {
    console.log(error)
    res.status(500).json({status:false,msg:error.message,data:[]});
  }
};

const returnMail = async (req, res) => {
  try {
      const {id}=req.params;
      const {returned}=req.body;
      let mail=await UploadMail.findOneAndUpdate({_id:id,assingn_status:"assigned",returned:false},{returned},{new:true})

    res.status(201).json({status:true,msg:"Success",data:[]});
  } catch (error) {
    res.status(500).json({status:false,msg:"No mail found",data:[]});
  }
};

const getAllMails = async (req, res) => {
  try {
    const mails = await UploadMail.find();

    res.status(200).json({status:true,msg:"Success",data:mails});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMailById = async (req, res) => {
  try {
    const { id } = req.params;

    const mail = await UploadMail.findById(id);

    if (!mail) {
      return res.status(404).json({status:false,msg:"No mail Found",data:[]});
    }

    res.status(200).json({status:true,msg:"Success",data:mail});
  } catch (error) {
    res.status(500).json({status:false,msg:"Error While Fetching",data:[]});
  }
};


const updateMailById = async (req, res) => {
  try {
    const { id } = req.params;
    const { mail_type, weight, length, width, height, mail } = req.body;

    const updatedMail = await UploadMail.findByIdAndUpdate(
      id,
      {
        mail_type,
        weight,
        length,
        width,
        height,
        mail,
      },
      { new: true }
    );

    if (!updatedMail) {
      return res.status(404).json({ error: 'Mail not found' });
    }

    res.status(200).json(updatedMail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const deleteMailById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMail = await UploadMail.findByIdAndDelete(id);

    if (!deletedMail) {
      return res.status(404).json({status:false,msg:"No Mail Found",data:[]});
    }

    res.status(200).json({status:true,msg:"Successfully Deleted",data:[]});
  } catch (error) {
    res.status(500).json({status:false,msg:"Error While Deleting",data:[]});
  }
};

module.exports = {
  createMail,
  getAllMails,
  getMailById,
  deleteMailById,
  updateMailById,
  returnMail
};
