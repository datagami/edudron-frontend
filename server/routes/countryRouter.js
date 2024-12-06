const Router = require('express').Router()
const countryCtrl=require('../controllers/countryCtrl');
// const auth = require('../../middleware/auth');

Router.get('/get-country',countryCtrl.get_country);
Router.post('/add-country',countryCtrl.add_country);





module.exports=Router;