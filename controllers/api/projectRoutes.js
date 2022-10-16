const router = require('express').Router();
const { Project, Language, Interest } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll();
    res.status(200).json(projectData);
  } catch (err) {
    res.status(400).json(err);
  }
});