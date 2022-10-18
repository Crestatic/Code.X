const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const languageRoutes = require('./languageRoutes');
const interestRoutes = require('./interestRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/languages', languageRoutes);
router.use('/interests', interestRoutes);


module.exports = router;