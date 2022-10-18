const router = require('express').Router();
const { Project, Interest } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const interestData = await Interest.findAll({
      include: [{ 
        model: Project,
        as: "project", 
        attributes: ["project_name"]
      }]
    });
    res.status(200).json(interestData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;