const sequelize = require('../config/connection');
const { Project, Language, ProjectLanguage, Feedback } = require('../models');

const projectSeedData = require('./projectSeedData.json');
const languageSeedData = require('./languageSeedData.json');
const projectLanguageSeedData = require('./projectLanguageSeedData.json');
const feedbackSeedData = require('./feedbackSeedData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const projects = await Project.bulkCreate(projectSeedData);
  const languages = await Language.bulkCreate(languageSeedData);
  const projectlanguage = await ProjectLanguage.bulkCreate(projectLanguageSeedData);
  const feedback = await Feedback.bulkCreate(feedbackSeedData);
}

seedDatabase();