const router = require('express').Router();
const feedback = require('../../models')

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const feedbackData = await feedback.create(req.body);
      
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