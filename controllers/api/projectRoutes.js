const router = require('express').Router();
const { Project, Language } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [
        { 
        model: Language,
        as: "languages",
        attributes: ["language_name"],
        through: {
          attributes: [],
        }
      }
    ],
    });
    res.status(200).json(projectData);
    res.render();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [{ model: Language }],
    });
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;