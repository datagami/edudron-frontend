const Misc = require('../../models/AdminPannel/Misc');


const miscCtrl = {
    add_misc: async (req, res) => {
        try {
            const logo =req.file.path
            console.log(req.file.path)
            const {
                name,
                about,
                email,
                phone,
            } = req.body
            const insert = await Misc({
                name,
                logo,
                about,
                email,
                phone,
            })
            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ status: false, message:error.message})
        }

    },
    update_misc: async (req, res) => {
        try {
            const logo =req?.file?.path;
        const filter = { _id: req.params.id }
        const update = { logo: logo, about: req.body.about,email: req.body.email,name: req.body.name, phone: req.body.phone }
            const result = await Misc.findOneAndUpdate(filter, update);
            res.json({ status: true, message: "Successfully Updated" })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ message: error.message })
        }

    },
    // delete_stream: async (req, res) => {
    //     Misc.findOneAndDelete({
    //         _id: req.params.id
    //     }, function (err, docs) {
    //         if (err) {
    //             console.log(err)
    //             res.status(500).json({ success: false, message: err.message })
    //         }
    //         else {
    //             res.json({ success: true, message: "deleted successfully" })
    //         }
    //     });

    // },
    get_misc: async (req, res) => {
        try {
            const result = await Misc.find({});
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    // getStreamById: async (req, res) => {
    //     try {
    //         const result = await Misc.findOne({ _id: req.params.id });
    //         res.send({ success: true, data: result })
    //     } catch (error) {
    //         res.status(500).json({ message: error.message })
    //     }
    // }
}
module.exports = miscCtrl;