const mongoose = require('mongoose')


const colleges_via_domain = new mongoose.Schema({
    domains:[],
    country:String,
    alpha_two_code:String,
    web_pages:[],
    "state-province":String,
    name:String,
})

const CollegesDomain = mongoose.model('CollegesDomain',colleges_via_domain)
module.exports = CollegesDomain