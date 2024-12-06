const Router = require('express').Router()
const examsCtrl=require('../../controllers/AdminPannel/addExamsCtrl');
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
Router.post('/add-exam',uploads.single("exam_pic"),auth,examsCtrl.add_exam);
Router.patch('/update-exam/:id',auth,examsCtrl.update_exam);
Router.delete('/delete-exam/:id',auth,examsCtrl.delete_exam);
Router.get('/get-exam',auth,examsCtrl.getAllExam);
Router.get('/get-single-exam/:id',auth,examsCtrl.getAllExam);



module.exports=Router;