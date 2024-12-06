const router = require('express').Router()
const multer =require('multer')
const collegeBasicCtrl = require('../controllers/collegeBasicsCtrl')
const auth = require('../middleware/auth');
// const multer = require("multer");


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
router.post('/add-college',uploads.array('college_pics',10),collegeBasicCtrl.addCollege);
router.get('/get-college/:id',auth,collegeBasicCtrl.getCollege);
router.get('/get-colleges',collegeBasicCtrl.getCollege_without_id);
router.delete('/delete-college/:id',auth,collegeBasicCtrl.deleteCollege);
router.patch('/update-fees-str/:id',auth,collegeBasicCtrl.updateFees);
router.patch('/update-faculty/:id',auth,collegeBasicCtrl.updateFacaulty);
router.post('/add-fees-str/:id',auth,collegeBasicCtrl.addFeesStr);
router.post('/add-faculty/:id',auth,collegeBasicCtrl.addFaculty);
router.delete('/delete-fees-str/:user_id/:id',auth,collegeBasicCtrl.deleteFees);
router.delete('/delete-faculty/:user_id/:id',auth,collegeBasicCtrl.deleteFaculty);
router.get('/get-collegebyid/:id',auth,collegeBasicCtrl.getCollege_by_id);


module.exports=router