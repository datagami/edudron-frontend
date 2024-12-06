const Router = require('express').Router()
const addmission_query_ctrl = require('../controllers/addmission_query_ctrl')
const auth = require('../middleware/auth');

Router.post('/create-add-query', auth,addmission_query_ctrl.createQuery );
Router.get('/get-add-query', auth,addmission_query_ctrl.get_addmission_query );


module.exports = Router