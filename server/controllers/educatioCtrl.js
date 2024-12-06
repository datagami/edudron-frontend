const user = require("../models/userModel");
const Experience = require("../models/proffession");
const Users = require('../models/userModel')
const educationController = {
  //  ==========add education============================
  add_education_ctrl: async (req, res) => {
    console.log(req.params.id);
    const { school, degree, field_of_study, start_date, end_date, grade } =
      req.body;
    const add = {
      school,
      degree,
      field_of_study,
      start_date,
      end_date,
      grade,
    };
    console.log(req.body)

    try {
      user.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { Education: add } },
        function (error, success) {
          if (error) {
            console.log(error);
          } else {
            // console.log(success);
            success.save();
            res.json(success);
          }
        }
      );
    } catch (error) {
      res.status(500).send("err");
    }
  },
  //=============================================get edu=========================================================
  get_edu: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await user.findOne({_id: id}).select(
        '-avatar,-role'
        )
      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  //============================================update education=====================================================
  update_edu_ctrl: async (req, res) => {
    console.log(req.params.id);
    user.updateOne(
      { "Education._id": req.params.id },
      {
        $set: {
          "Education.$.school": req?.body?.school,
          "Education.$.degree": req?.body?.degree,
          "Education.$.field_of_study": req?.body?.field_of_study,
          "Education.$.start_date": req?.body?.start_date,
          "Education.$.end_date": req?.body?.end_date,
          "Education.$.grade": req?.body?.grade,
        },
      },
      function (err, model) {
        if (err) {
          console.log(err);
          return res.send(err);
        }
        return res.json(model);
      }
    );
  },

  //==============================================add proffession======================================

  add_prof: async (req, res) => {
    // res.send('its ok')
    const {
      user_id,
      company,
      role,
      start_date,
      end_date,
      work_as,
      city,
      state,
      country,
    } = req.body;
    const add = {
      user_id,
      company,
      role,
      start_date,
      end_date,
      city,
      state,
      country,
      work_as,
    };
    try {
      const insert = await new Experience(add);
      const result = await insert.save();
      const exp=await Experience.findOne({_id:result._id});
        await Users.findOneAndUpdate({ _id: user_id }, {
        $push: { experience: exp._id }
    }, { new: true }).populate("exp").populate("following").populate("followers")
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500).send("err");
    }
  },

  //==============================================get proffession ======================================

  get_exp_ctrl: async (req, res) => {

    const id = req.params.id;
    try {
      const result = await Experience.find({ 
        $or: [
          { role: { $regex: req.query.role } },
        ],
        user_id: id
       });
      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  //===============================delete edu=========================================
  delete_edu_ctrl: async (req, res) => {
  try {
    user.updateOne({ _id: req.params.user_id }, { "$pull": { "Education": { "_id": req.params.id } }}, { safe: true, multi:true }, function(err, result) {
      if(result){
        res.json({message:'successfuly deleted',status:true})
      }else{
        res.status(500).json({message:'something went wrong'})
      }
  });
  } catch (error) {
    res.status(500).json(error)
  }
  },
 

  //==================================update exp=====================================

  exp_update: async (req, res) => {
    const filter = { _id: req.params.id };
    const update = {
      company: req?.body?.company,
      role: req?.body?.role,
      start_date: req?.body?.start_date,
      end_date: req?.body?.end_date,
      city: req?.body?.city,
      state: req?.body?.state,
      country: req?.body?.country,
      skills: [],
      work_as: req?.body?.work_as,
      currently_working:req.body.currently_working
    };

    try {
      let doc = await Experience.findOneAndUpdate(filter, update, {
        new: true,
      });
      const result = await doc.save();
      console.log(result);
      res.json({ message: "successfully updated", status: true, data: result });
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  },
  //================================================delete exp====================================
  delete_exp_ctrl: async (req, res) => {
    console.log("delete",req.params.id)
    try {
      const result = await Experience.deleteOne({ _id: req.params.id });
      await Users.findOneAndUpdate({ _id: req.user._id }, {
      $pull: { experience: req.params.id }
  }, { new: true }).populate("exp").populate("following").populate("followers")
      if (result) {
        res.json({ message: "successfuly deleted", status: true });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
module.exports = educationController;
