const Router = require('express').Router()
const stateCtrl=require('../controllers/stateCtrl');
// const auth = require('../../middleware/auth');

Router.get('/get-state/:id',stateCtrl.get_state);
Router.post('/add-state',stateCtrl.add_state);





module.exports=Router;