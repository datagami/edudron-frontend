const AddCourse = require('../../models/AdminPannel/addCourse');
const { uploadFile } = require("../../s3");
const AWS_folder = "course_pic/";

const courseCtrl = {
    add_course: async (req, res) => {
        try {
            let image
            if(req.file){
            const  uploadResult = await uploadFile(req.file, AWS_folder);
               image= await uploadResult.Location;
            }
            const {
                name,
                streamId,
                categoryId,
                // eligibility,
                // fees,
                status
            } = req.body
            const insert = await AddCourse({
                name,
                streamId,
                categoryId,
                // eligibility,
                // fees,
                status,
                course_pic:image
            })
            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    update_course: async (req, res) => {
        const filter = { _id: req.params.id }
        const update = { name: req.body.name, streamId: req.body.streamId, categoryId: req.body.categoryId, status: req.body.status }
        try {
            const result = await AddCourse.findOneAndUpdate(filter, update);
            res.json({ status: true, message: "Successfully Updated" })
        } catch (error) {
            console.log(error.message)
            res.json({ message: error.message })
        }
    },
    delete_course: async (req, res) => {
        AddCourse.findOneAndDelete({
            _id: req.params.id
        }, function (err, docs) {
            if (err) {
                console.log(err)
                res.status(500).json({ success: false, message: err.message })
            }
            else {
                res.json({ success: true, message: "deleted successfully" })
            }
        });
    },
    getAllCourse: async (req, res) => {
        try {
            const queryObject = {};
            if (req.query.course?.length) {
                queryObject["$or"] = [
                    { "name": { $regex: req.query.course, $options: "i" } },
                  ];
              }
            const {page=1,limit=15}=req.query;
            const result = await AddCourse.find(queryObject).populate('categoryId').populate('streamId').
            limit(limit*1).skip((page-1)*limit).exec();
            const count=await AddCourse.countDocuments();
            res.send({ success: true, data: result ,TotalPages:Math.ceil(count/limit),currentPage:page});
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getCourseById: async (req, res) => {
        try {
            const result = await AddCourse.findOne({ _id: req.params.id }).populate('categoryId').populate('streamId');
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
module.exports = courseCtrl;