const router = require('express').Router();
const { Project, Language } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const languageData = await Language.findAll({
      include: [{ 
        model: Project,
        as: "projects",
        attributes: ["project_name", "id"],
        through: {
          attributes: [],
        } 
      }]
    });
    res.status(200).json(languageData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;