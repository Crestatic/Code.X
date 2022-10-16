const router = require('express').Router();
const { Project, Language, Interest } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const languageData = await Language.findAll();
    res.status(200).json(languageData);
  } catch (err) {
    res.status(400).json(err);
  }
});