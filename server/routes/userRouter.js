const router = require('express').Router()
const auth = require("../middleware/auth")
const userCtrl = require("../controllers/userCtrl")
const { uploadFile, uploadVideo, deleteFile } = require("../s3")
const AWS_folder = "other/"
const multer = require('multer');

var Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: Storage })


router.get('/search', auth, userCtrl.searchUser)

router.get('/user/:id', auth, userCtrl.getUser)

router.patch('/user/userUpdate', upload.any(), auth, userCtrl.updateUser)
router.patch('/user/coverupdate',upload.any(), auth, userCtrl.updateCover)

router.patch('/user/:id/connect', auth, userCtrl.follow)
router.patch('/user/:id/remove-connection', auth, userCtrl.removeFollower)


router.patch('/user/:id/unfollow', auth, userCtrl.unfollow)
router.patch('/user/:id/blockUser', auth, userCtrl.blockUser);



router.get('/suggestionsUser', auth, userCtrl.suggestionsUser)
router.post('/leaderBoard', auth,userCtrl.leaderBoard)
//image upload api

router.post('/upload-image-aws', auth, upload.single('image'), async (req, res) => {
    if (req.file) {
        const file = req.file
        const uploadResult = await uploadFile(file, AWS_folder)
        res.json({ Note: "uploadResult.location is the base URL for the file", uploadResult })
    }
})

module.exports = router