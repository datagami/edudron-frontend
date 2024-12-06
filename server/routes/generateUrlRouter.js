const createUrl=require('../controllers/generate_urlCtrl');
const Router = require('express').Router()
const auth = require('../middleware/auth')
const multer =require('multer');


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
var uploads = multer({ storage: storage })
Router.post('/generate-url',uploads.array("media",5),createUrl.create_url);

module.exports=Router;