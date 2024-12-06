const Router = require('express').Router()
const cityCtrl=require('../controllers/cityCtrl');
// const auth = require('../../middleware/auth');

Router.get('/get-city/:id',cityCtrl.get_city);
Router.post('/add-city',cityCtrl.add_city);





module.exports=Router;