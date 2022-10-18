const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const languageRoutes = require('./languageRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/languages', languageRoutes);


module.exports = router;