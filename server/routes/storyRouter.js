const router = require('express').Router()
const storyCtrl = require('../controllers/storyCtrl')
const auth = require('../middleware/auth')


const multer = require('multer');

var Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: Storage })





router.route('/story/:id')
    .patch(auth ,  storyCtrl.storySeenUser)
    .delete(auth, storyCtrl.deleteStory)

router.get('/story', auth, storyCtrl.getAllStory)
router.post('/story', auth, upload.any(), storyCtrl.addStory)
router.patch('/story/:id/like', auth, storyCtrl.likeStory)
router.patch('/story/:id/unlike', auth, storyCtrl.unlikeStory)
router.get('/story', auth , storyCtrl.getAllStory)
router.get('/user_story/:id' , auth , storyCtrl.getUserStory)

 

module.exports = router