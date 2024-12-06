const term_condition=require('../controllers/term&condition');
const router = require('express').Router()

router.post('/add-term-condition',term_condition.add_term);
router.get('/get-term-condition',term_condition.get_term);

module.exports=router;
