const Router = require('express').Router()
const courseCtrl=require('../../controllers/AdminPannel/addCourseCtrl');
const auth = require('../../middleware/auth');
const multer =require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    // Only accept image files
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  var uploads = multer({ storage: storage ,fileFilter: fileFilter})
Router.post('/add-course',uploads.single('course_pic'),auth,courseCtrl.add_course);
Router.patch('/update-course/:id',auth,courseCtrl.update_course);
Router.delete('/delete-course/:id',auth,courseCtrl.delete_course);
Router.get('/get-course',auth,courseCtrl.getAllCourse);
Router.get('/get-single-course/:id',auth,courseCtrl.getCourseById);



module.exports=Router;