const router = require('express').Router();
const userRoutes = require('./userRoutes');
const feedbackRoutes = require('./feedbackRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/feedback', feedbackRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;