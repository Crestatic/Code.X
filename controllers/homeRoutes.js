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

  

router.get('/chat', (req, res) => {
  res.render('chat')
});

module.exports = router;