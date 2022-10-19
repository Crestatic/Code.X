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

router.post('/', async (req, res) => {
  try {
    const projectData = await Project.create(req.body);
    res.status(200).json(projectData);
    console.log(projectData);
  } catch (err) {
    res.status(400).json(err);
    console.log(projectData)
  }
});

module.exports = router;