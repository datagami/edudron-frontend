const express = require('express');
const uploadMailController = require('../controllers/upload_mail.controller');
const multer = require('multer');

const upload = multer({ dest: 'uploads' });

const router = express.Router();


router.post('/',upload.single("mail"), uploadMailController.createMail);


router.get('/', uploadMailController.getAllMails);


router.get('/:id', uploadMailController.getMailById);


router.patch("/:id",uploadMailController.updateMailById);


router.patch("/return/:id",uploadMailController.returnMail);



router.delete('/:id', uploadMailController.deleteMailById);


module.exports = router;

