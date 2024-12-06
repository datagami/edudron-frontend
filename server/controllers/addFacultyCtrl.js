const AddFaculty = require('../models/Social/college admin/addFaculty');


const facultyCtrl = {
    add_faculty: async (req, res) => {
        try {
            const {
                user_id,
                name,
                post,
                email,
                phone,
                collegeId,
                status,
            } = req.body
            const insert = await AddFaculty({
                user_id,
                name,
                post,
                email,
                phone,
                collegeId,
                status,
            })
            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    update_faculty: async (req, res) => {
        const filter = { _id: req.params.id }
        const update = {
            name: req.body.name,
            user_id: req.body.user_id,
            post: req.body.post,
            status: req.body.status,
            collegeId: req.body.collegeId,
            phone: req.body.phone,
            email: req.body.email
        }
        try {
            const result = await AddFaculty.findOneAndUpdate(filter, update);
            res.json({ status: true, message: "Successfully Updated" })
        } catch (error) {
            console.log(error.message)
            res.json({ message: error.message })
        }
    },
    delete_faculty: async (req, res) => {
        AddFaculty.findOneAndDelete({
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
    getAllfaculty: async (req, res) => {
        try {
            const result = await AddFaculty.find({});
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getfacultyById: async (req, res) => {
        try {
            const result = await AddFaculty.findOne({ _id: req.params.id });
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
module.exports = facultyCtrl;