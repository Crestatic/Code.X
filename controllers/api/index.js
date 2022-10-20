const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const languageRoutes = require('./languageRoutes');
const feedbackRoutes = require('./feedbackRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/languages', languageRoutes);
router.use('/feedback', feedbackRoutes);

module.exports = router;