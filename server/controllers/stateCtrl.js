const { ConstructionOutlined } = require('@mui/icons-material');
const StateList = require('../models/stateModel');


const stateCtrl = {
    get_state: async (req, res) => {
        ConstructionOutlined
        try {
            const result = await StateList.find({country_id:req.params.id});
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    add_state: async (req, res) => {
        try {
            const {
                id,
                name,
                country_id,
                country_name
            } = req.body
            const insert = await StateList({
                id,
                name,
                country_id,
                country_name
            })
            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}
module.exports = stateCtrl;