const CityList = require('../models/cityModel');


const cityCtrl = {
    get_city: async (req, res) => {
        try {
            const result = await CityList.find({state_id:req.params.id});
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    add_city: async (req, res) => {
        try {
            const {
                id,
                name,
                country_id,
                state_id,
                country_name
            } = req.body
            const insert = await CityList({
                id,
                name,
                country_id,
                state_id,
                country_name
            })
            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}
module.exports = cityCtrl;