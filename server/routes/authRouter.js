const Router = require('express').Router()
const authCtrl = require('../controllers/authCtrl')
const auth = require('../middleware/auth')

Router.post('/forgotPass', authCtrl.forgotPassOtp )
Router.get('/passwordReset/', authCtrl.resetPasswordController )
Router.post('/register', authCtrl.register);
Router.post('/updatePass', auth , authCtrl.updatePassword)
Router.post('/login', authCtrl.login);
Router.post('/logout', authCtrl.logout);



module.exports = Router