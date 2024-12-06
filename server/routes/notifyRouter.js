const router = require('express').Router()
const auth = require('../middleware/auth')
const multer =require('multer')
const notifyCtrl = require('../controllers/notifyCtrl')
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
router.post('/notify', uploads.any(),auth, notifyCtrl.createNotify)

router.delete('/notify/:id', auth, notifyCtrl.removeNotify)

router.get('/notifies', auth, notifyCtrl.getNotifies)

router.patch('/isReadNotify/:id', auth, notifyCtrl.isReadNotify)

router.patch('/clearAllNotify', auth, notifyCtrl.deleteAllNotifies)



module.exports = router