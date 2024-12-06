const CollegeBasics = require("../models/Social/college admin/college_basics");
const { uploadFile } = require("../s3");
const AWS_folder = "college_pics/";
const collegeBasicCtrl = {
  addCollege: async (req, res) => {
    try {
      req?.files?.map((v) => {
        return v.path;
      });
      const image = []
      const file = req.files.map(async (v, key) => {
        uploadResult = await uploadFile(v, AWS_folder);

        return await uploadResult.Location;
      })
      const imageUrls = await Promise.all(file);
      const {
        user_id,
        college_name,
        email,
        phone,
        est_year,
        ugc_approved,
        description,
        web_url,
        streamId
      } = req.body;
      const city = JSON.parse(req.body.city)
      const state = JSON.parse(req.body.state)
      const country = JSON.parse(req.body.country)
      const course = JSON.parse(req.body.course);
      console.log(image, 'image');
      const insert = await CollegeBasics({
        user_id,
        college_name,
        email,
        phone,
        est_year,
        ugc_approved,
        city,
        state,
        country,
        description,
        course,
        web_url,
        college_pics: imageUrls,
        streamId
      });

      const result = await insert.save();
      res.json({ status:true,msg:"Added successfully" ,data: result });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },

  ////////////////////////////////////////==get college by admin id=============================================
  getCollege: async (req, res) => {
    CollegeBasics.find({user_id:req.params.id})
      .populate({ path: 'all' })
      .exec((err, college) => {
        if (err) {
          console.log(err);
          return;
        }
        res.send({ data: college })
        console.log(college.course_fees);
      });
  },
  //===============================================get college by college id================================
  getCollege_by_id: async (req, res) => {
    try {
      const result = await CollegeBasics.findOne({ _id: req.params.id });
      res.json({ data: result, status: true });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  //=================================================get all college===========================================
  getCollege_without_id: async (req, res) => {
    // console.log(req.query.city)
    let arrayOfStream = req.query.stream ? req.query.stream.split(',') : '';
    let arrayOfState = req.query.state ? req.query.state.split(',') : '';
    let arrayOfCourse = req.query.course ? req.query.course.split(',') : '';
    let arrayOfCity=req.query.city ? req.query.city.split(',') : '';
    // console.log(arrayOfCity,arrayOfCourse)
    let sort = req.query.sort
    const queryObject = {};
    const {page=1,limit=8}=req.query;
    if (arrayOfStream.length) {
      queryObject["course.streamId"] = { $in: arrayOfStream };
    }
    if (arrayOfCourse.length) {
      queryObject["course.courseId"] = { $in: arrayOfCourse };
    }
    if (arrayOfState.length) {
      queryObject["state.stateId"] = { $in: arrayOfState };
    }
    if (arrayOfCity.length) {
      queryObject["city.cityId"] = { $in: arrayOfCity };
    }
    if (req.query.name?.length) {
      queryObject["$or"] = [
        { "college_name": { $regex: req.query.name, $options: "i" } },
        { "course.stream": { $regex: req.query.name, $options: "i" } },
        { "course.course": { $regex: req.query.name, $options: "i" } },
      ];
    }
    let apiData =  CollegeBasics.find(queryObject).populate("streamId");
    

    

    if (sort) {
      apiData = apiData.sort('college_name');
    }

    try {
      const result = await apiData.limit(limit*1).skip((page-1)*limit).exec();
    const countDoc = await CollegeBasics.countDocuments(queryObject);

      // const rest=await apiData.countDocuments();
      // console.log(rest)
      // const counter=await result.countDocuments()
      const count=await CollegeBasics.countDocuments();
      res.json({ data: result, status: true ,page:page,Total:Math.ceil(count/limit),count:countDoc});
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },

  //===============================================delete college by college id=======================
  deleteCollege: async (req, res) => {
    try {
      const result = await CollegeBasics.deleteOne({ _id: req.params.id });
      if (result) {
        res.json({ message: "successfuly deleted", status: true });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  updateFees: async (req, res) => {
    CollegeBasics.updateOne(
      { "course_fees._id": req.params.id },
      {
        $set: {
          "course_fees.$.course": req?.body?.course,
          "course_fees.$.fees": req?.body?.fees,
          "course_fees.$.eligibility": req?.body?.eligibility,
        },
      },
      function (err, model) {
        if (err) {
          return res.send(err.message);
        }
        return res.json({ message: "updated successfully", status: true });
      }
    );
  },
  updateFacaulty: async (req, res) => {
    CollegeBasics.updateOne(
      { "faculty._id": req.params.id },
      {
        $set: {
          "faculty.$.name": req?.body?.name,
          "faculty.$.post": req?.body?.post,
          "faculty.$.email": req?.body?.email,
          "faculty.$.phone": req?.body?.phone,
        },
      },
      function (err, model) {
        if (err) {
          return res.send(err.message);
        }
        return res.json({ message: "updated successfully", status: true });
      }
    );
  },
  addFeesStr: async (req, res) => {
    console.log(req.params.id);
    const { course, fees, eligibility } = req.body;
    const add = {
      course,
      fees,
      eligibility,
    };

    try {
      CollegeBasics.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { course_fees: add } },
        function (error, success) {
          if (error) {
            console.log(error);
          } else {
            // console.log(success);
            success.save();
            res.json({ message: "added successfully", status: true });
          }
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  addFaculty: async (req, res) => {
    console.log(req.params.id);
    const { name, post, email, phone } = req.body;
    const add = {
      name,
      post,
      email,
      phone,
    };

    try {
      CollegeBasics.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { faculty: add } },
        function (error, success) {
          if (error) {
            console.log(error);
          } else {
            // console.log(success);
            success.save();
            res.json({ message: "added successfully", status: true });
          }
        }
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  deleteFees: async (req, res) => {
    try {
      CollegeBasics.updateOne(
        { user_id: req.params.user_id },
        { $pull: { course_fees: { _id: req.params.id } } },
        { safe: true, multi: true },
        function (err, result) {
          if (result) {
            res.json({ message: "successfuly deleted", status: true });
          } else {
            res.status(500).json({ message: "something went wrong" });
          }
        }
      );
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  deleteFaculty: async (req, res) => {
    try {
      CollegeBasics.updateOne(
        { user_id: req.params.user_id },
        { $pull: { faculty: { _id: req.params.id } } },
        { safe: true, multi: true },
        function (err, result) {
          if (result) {
            res.json({ message: "successfuly deleted", status: true });
          } else {
            res.status(500).json({ message: "something went wrong" });
          }
        }
      );
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};
module.exports = collegeBasicCtrl;
