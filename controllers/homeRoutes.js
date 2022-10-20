const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

// console.log("req.session.logged_in");
router.get('/', async (req, res) => {
    // if (req.session.logged_in) {
    // res.redirect('/profile');
  //   return;
  // }

  res.render('login', {
    logged_in: req.session.logged_in
  });
});
  
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.post('/', async (req, res) => {
//   console.log(req.body)
//   try {
//     const feedbackData = await feedback.create(req.body);
    
//     req.session.save(() => {
//       req.session.feedback_id = feedbackData.id;
//       req.session.logged_in = true;

//     res.status(200).json(feedbackData);
//   });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get('/chat', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });
    res.render('chat', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });
    res.render('project', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
