const {Router} = require('express');

const sellController = require('../controllers/sellController');


const router = Router();

const redirectDash = (req, res, next) => {
    if (req.session.userID){
        next();
    } else {
        
        res.redirect('/login');
    }
}

router.get('/sell_dash',redirectDash, sellController.selldash_get);
router.get('/upload_pro',redirectDash, sellController.upload_get);
router.get('/posted_pro',redirectDash, sellController.posted_get);



module.exports = router;