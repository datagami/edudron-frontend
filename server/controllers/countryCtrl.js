const CountryList = require('../models/countryList');


const countryCtrl = {
    get_country: async (req, res) => {
        try {
            const result = await CountryList.find({});
            res.send({ success: true, data: result })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    add_country: async (req, res) => {
        try {
            const {
                id,
                name,
            } = req.body
            const insert = await CountryList({
                id,
                name,
            })
            const result = await insert.save();
            res.json({ status: true, message: "Added Successfully" })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}
module.exports = countryCtrl;