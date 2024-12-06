const Router = require('express').Router()
const facultyCtrl=require('../controllers/addFacultyCtrl');
const auth = require('../middleware/auth');

Router.post('/add-faculty',auth,facultyCtrl.add_faculty);
Router.patch('/update-faculty/:id',auth,facultyCtrl.update_faculty);
Router.delete('/delete-faculty/:id',auth,facultyCtrl.delete_faculty);
Router.get('/get-faculty',auth,facultyCtrl.getAllfaculty);
Router.get('/get-single-faculty/:id',auth,facultyCtrl.getfacultyById);



module.exports=Router;