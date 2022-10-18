const sequelize = require('../config/connection');
const { Project, Language, Interest } = require('../models');

const projectSeedData = require('./projectSeedData.json');
const languageSeedData = require('./languageSeedData.json');
const interestSeedData = require('./interestSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const projects = await Project.bulkCreate(projectSeedData);
  const languages = await Language.bulkCreate(languageSeedData);
  const interests = await Interest.bulkCreate(interestSeedData);
}

seedDatabase();