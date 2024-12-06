const router = require('express').Router()
const auth = require('../middleware/auth')
const multer = require('multer')
var mime = require('mime-types')
var Storage = multer.diskStorage({
    destination: "uploads",
   
    filename: (req, file, cb) => {
   console.log(file.mimetype)
    fileExtension = mime.extension(file.mimetype);
    console.log(fileExtension)
        cb(null, file.fieldname + '-' + Date.now() + '.'+fileExtension)
    }
});

var upload = multer({ storage: Storage })


const interactionCtrl = require('../controllers/socialInteractionCtrl')

router.post('/social/follow/:userId', auth, interactionCtrl.followUser)

router.post('/social/unfollow-asto/:astroId', auth, interactionCtrl.unfollowUser)
router.get('/social/getfollower/:id', auth, interactionCtrl.getFollower)
router.get('/social/getfollowing/:id', auth, interactionCtrl.getFollowing)






router.patch('/social/like/:id', auth, interactionCtrl.likepost)

router.patch('/social/unlike/:id', auth, interactionCtrl.unlike)

router.get('/social/showlikes/:id', auth, interactionCtrl.showlikes)
router.get('/social/showcomments/:id', auth, interactionCtrl.showcomments)
router.post('/social/addcomment/:id', auth, upload.single("image"), interactionCtrl.addcomment)
router.delete('/social/deletecomment/:id/:commentId', auth, interactionCtrl.deletecomment)

router.patch('/social/editcomment/:id/:commentId', auth, interactionCtrl.editcomment)
module.exports = router




//List of Following of Astro/Member


//Like a post



//Unlike a post 



//show likes



// add comment


// delete comment 


//show comments


//edit comment



module.exports = router