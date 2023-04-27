const {Router} = require('express');

const cusController = require('../controllers/cusController');


const router = Router();



router.get('/view', cusController.view_get);



module.exports = router;
