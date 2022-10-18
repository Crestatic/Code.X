const router = require('express').Router();
const { Project, Language, Interest } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [{ model: Language, Interest }],
    });
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;