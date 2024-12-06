const AddCategory = require('../../models/AdminPannel/addCategory');


const categoryCtrl = {
    add_category: async (req, res) => {
        try {
            const {
                name,
                description,
                parent,
                status
            } = req.body
            const insert = await AddCategory({
                name,
                description,
                parent,
                status,
            })

            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    },
    update_category: async (req, res) => {
        const filter = { _id: req.params.id }
        const update = { name: req.body.name, description: req.body.description, parent: req.body.parent,status:req.body.status }
        try {
            const result = await AddCategory.findOneAndUpdate(filter, update);
            res.json({ status: true, message: "Successfully Updated" })
        } catch (error) {
            console.log(error.message)
            res.json({ message: error.message })
        }
    },
    delete_category: async (req, res) => {
        AddCategory.findOneAndDelete({
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
    getAllCategory: async (req, res) => {
        try {
            const result = await AddCategory.find({});
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const result = await AddCategory.findOne({ _id: req.params.id });
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}
module.exports = categoryCtrl;