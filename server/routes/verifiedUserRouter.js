const router = require('express').Router()
const auth = require('../middleware/auth')
const verifiedUserCtrl = require('../controllers/verifiedUserCtrl')





const multer = require('multer');

var Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: Storage })

router.post('/reqOfficial',  auth, upload.any() ,verifiedUserCtrl.requestVerification)
router.get('/reqOfficialUser', auth, verifiedUserCtrl.getVerificationReq)
router.post('/confirmOfficial/:id', auth, verifiedUserCtrl.confirmVerification)
router.post('/removeOfficial/:id' , auth ,verifiedUserCtrl.removeVerification )




module.exports = router

