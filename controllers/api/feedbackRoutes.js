const router = require('express').Router();
const feedback = require('../../models')


router.post('/', async (req, res) => {
    console.log(req.body)
    try {
      const newFeedback = await feedback.create(req.body);
        
      res.status(200).json(newFeedback);
    } catch (err) {
      res.status(400).json(err);
    }
  });




module.exports = router;