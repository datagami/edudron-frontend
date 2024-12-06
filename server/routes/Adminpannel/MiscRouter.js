const Router = require('express').Router()
const miscCtrl=require('../../controllers/AdminPannel/MiscCtrl');
const multer =require('multer')
const auth = require('../../middleware/auth');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  var uploads = multer({ storage: storage ,fileFilter: fileFilter})

Router.post('/add-misc',uploads.single('logo'),auth,miscCtrl.add_misc);
Router.patch('/update-misc/:id',uploads.single('logo'),auth,miscCtrl.update_misc);
// Router.delete('/delete-misc/:id',auth,miscCtrl.delete_course);
Router.get('/get-misc',auth,miscCtrl.get_misc);
// Router.get('/get-single-misc/:id',auth,miscCtrl.getCourseById);



module.exports=Router;