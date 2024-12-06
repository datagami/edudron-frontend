const Router = require('express').Router()
const streamCtrl=require('../../controllers/AdminPannel/addStreamCtrl');
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
Router.post('/add-stream',uploads.single("stream_pic"), auth,streamCtrl.add_stream );
Router.patch('/update-stream/:id',auth,streamCtrl.update_stream);
Router.delete('/delete-stream/:id',auth,streamCtrl.delete_stream);
Router.get('/get-stream',auth,streamCtrl.getAllStream);
Router.get('/get-single-stream/:id',auth,streamCtrl.getStreamById);

module.exports=Router;