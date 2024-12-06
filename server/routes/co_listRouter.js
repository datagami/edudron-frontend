const router = require('express').Router()
const allCollegesList=require('../controllers/co_listCtrl')

router.get('/get-co-list',allCollegesList.getCollegeList);
router.post('/add-co-list',allCollegesList.addCollegeList)

module.exports=router