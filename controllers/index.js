const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const feedbackRoutes = require('./feedbackRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/feedback', feedbackRoutes);



module.exports = router;
