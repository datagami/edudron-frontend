const router = require('express').Router();
const organisationFiltersCtrl = require('../controllers/organisationFilter');
const auth = require('../middleware/auth');


router.get('/get-all-org',auth,organisationFiltersCtrl.getCollege);
router.post('/add-all-org',auth,organisationFiltersCtrl.addCollege);


module.exports=router

