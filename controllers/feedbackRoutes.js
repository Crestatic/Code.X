const { Feedback } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const feedbackData  = await Feedback.findAll();

    const feedbacks = feedbackData.map((feedback) => feedback.get({ plain: true}));

    res.render('feedback', {
      feedbacks,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;


