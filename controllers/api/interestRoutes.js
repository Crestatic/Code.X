const router = require('express').Router();
const { Project, Language, Interest } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const interestData = await Interest.findAll();
    res.status(200).json(interestData);
  } catch (err) {
    res.status(400).json(err);
  }
});