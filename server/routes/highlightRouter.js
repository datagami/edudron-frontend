const router = require('express').Router()
const auth = require('../middleware/auth')
const highlightCtrl = require('../controllers/highlightCtrl')




const multer = require('multer');

var Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: Storage })


router.patch('/update-highlight-cover/:id',upload.any(), auth, highlightCtrl.updateCover)

router.patch('/update-highlight/:id', auth, highlightCtrl.updateHighlight)



router.post('/addhighlight',auth , highlightCtrl.addHighlight)
router.get("/gethighlights/:id",auth,highlightCtrl.getHighlight)
router.delete("/delete-highlights/:id",auth,highlightCtrl.deleteHighlight)




module.exports = router