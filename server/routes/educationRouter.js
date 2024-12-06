const router = require('express').Router()
const educatioCtrl = require('../controllers/educatioCtrl')
const auth = require('../middleware/auth')

router.post('/add-edu/:id', auth, educatioCtrl.add_education_ctrl);
router.get('/get-edu/:id', auth, educatioCtrl.get_edu);
router.post('/update-edu/:id', auth, educatioCtrl.update_edu_ctrl);
router.post('/add-exp', auth, educatioCtrl.add_prof);
router.get('/get-exp/:id', auth, educatioCtrl.get_exp_ctrl);
router.patch('/exp-update/:id', auth, educatioCtrl.exp_update);
router.delete('/exp-delete/:id', auth, educatioCtrl.delete_exp_ctrl);
router.delete('/edu-delete/:user_id/:id', auth, educatioCtrl.delete_edu_ctrl);



module.exports = router