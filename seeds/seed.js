const sequelize = require('../config/connection');
const { Project, Language, Interest, ProjectLanguage, ProjectInterest } = require('../models');

const projectSeedData = require('./projectSeedData.json');
const languageSeedData = require('./languageSeedData.json');
const interestSeedData = require('./interestSeedData.json');
const projectLanguageSeedData = require('./projectLanguageSeedData.json');
const projectInterestSeedData = require('./projectInterestSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const projects = await Project.bulkCreate(projectSeedData);
  const languages = await Language.bulkCreate(languageSeedData);
  const projectlanguage = await ProjectLanguage.bulkCreate(projectLanguageSeedData);
  const interests = await Interest.bulkCreate(interestSeedData);
  const projectinterest = await ProjectInterest.bulkCreate(projectInterestSeedData);
}

seedDatabase();