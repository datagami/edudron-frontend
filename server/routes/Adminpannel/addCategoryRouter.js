const Router = require('express').Router()
const categoryCtrl=require('../../controllers/AdminPannel/addCategoryCtrl');
const auth = require('../../middleware/auth');

Router.post('/add-category',auth,categoryCtrl.add_category);
Router.patch('/update-category/:id',auth,categoryCtrl.update_category);
Router.delete('/delete-category/:id',auth,categoryCtrl.delete_category);
Router.get('/get-category',auth,categoryCtrl.getAllCategory);
Router.get('/get-single-category/:id',auth,categoryCtrl.getCategoryById);



module.exports=Router;