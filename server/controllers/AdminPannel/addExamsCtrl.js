const AddExams = require('../../models/AdminPannel/addExams');
const { uploadFile } = require("../../s3");
const AWS_folder = "exam_pic/";

const examsCtrl = {
    add_exam: async (req, res) => {
        try {
            let image
           if(req.file){
           const  uploadResult = await uploadFile(req.file, AWS_folder);
              image= await uploadResult.Location;
           }

            const {
                name,
                streamId,
                courseId,
                categoryId,
                status
            } = req.body
            const insert = await AddExams({
                name,
                streamId,
                courseId,
                categoryId,
                status,
                exam_pic:image
            })

            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message })
        }

    },
    update_exam: async (req, res) => {
        const filter = { _id: req.params.id }
        const update = { name: req.body.name, streamId: req.body.streamId, courseId: req.body.courseId, categoryId: req.body.categoryId, status: req.body.status }
        try {
            const result = await AddExams.findOneAndUpdate(filter, update);
            res.json({ status: true, message: "Successfully Updated" })
        } catch (error) {
            console.log(error.message)
            res.json({ message: error.message })
        }

    },
    delete_exam: async (req, res) => {
        AddExams.findOneAndDelete({
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
    getAllExam: async (req, res) => {
        try {
            const result = await AddExams.find({}).populate('streamId').populate("courseId").populate('categoryId');
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getExamById: async (req, res) => {
        try {
            const result = await AddExams.findOne({ _id: req.params.id }).populate('streamId').populate("courseId").populate('categoryId');
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
module.exports = examsCtrl;