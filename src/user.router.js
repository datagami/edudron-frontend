const express = require('express');
const userController=require('../controllers/user.controller');
const auth=require("../middlewares/authMiddleware")
const router = express.Router();


router.post('/register', userController.register);


router.post('/login', userController.login);

router.post('/forgot-password', userController.forgotPassword);

router.post('/verify-otp', userController.verifyOTP);

router.get("/opeartor-list",auth,userController.opeartor_list);


router.get("/profile/:user_type",auth,userController.profile);






module.exports = router;