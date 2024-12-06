const AddStream = require('../../models/AdminPannel/addStream');
const { uploadFile } = require("../../s3");
const AWS_folder = "stream_pic/";

const streamCtrl = {
    add_stream: async (req, res) => {
        try {
            let image
            if (req.file) {
                const uploadResult = await uploadFile(req.file, AWS_folder);
                image = await uploadResult.Location;
            }
            const {
                name,
                categoryId,
                status,
            } = req.body
            const insert = await AddStream({
                name,
                categoryId,
                status,
                stream_pic: image
            })
            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            console.log(error.message)
            res.json({ status: false, message: error.message })
        }

    },
    update_stream: async (req, res) => {
        const filter = { _id: req.params.id }
        const update = { name: req.body.name, status: req.body.status }
        try {
            const result = await AddStream.findOneAndUpdate(filter, update);
            res.json({ status: true, message: "Successfully Updated" })
        } catch (error) {
            console.log(error.message)
            res.json({ message: error.message })
        }

    },
    delete_stream: async (req, res) => {
        AddStream.findOneAndDelete({
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
    getAllStream: async (req, res) => {
        try {
            const { page = 1, limit = 10 } = req.query;
            const result = await AddStream.find({}).
                limit(limit * 1).skip((page - 1) * limit).exec();
            const count = await AddStream.countDocuments();
            res.send({ success: true, data: result, TotalPages: Math.ceil(count / limit), currentPage: page })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getStreamById: async (req, res) => {
        try {
            const result = await AddStream.findOne({ _id: req.params.id });
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
module.exports = streamCtrl;