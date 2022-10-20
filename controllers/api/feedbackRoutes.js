const router = require('express').Router();
const { Feedback } = require('../../models')

router.post('/', async (req, res) => {
    try {
      const feedbackData = await Feedback.create(req.body);
      
      req.session.save(() => {
        req.session.feedback_id = feedbackData.id;
        req.session.logged_in = true;

      res.status(200).json(feedbackData);
    });
    } catch (err) {
      res.status(400).json(err);
    }
  });




module.exports = router;