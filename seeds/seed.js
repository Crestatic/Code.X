const sequelize = require('../config/connection');
const { Project, Language, ProjectLanguage } = require('../models');

const projectSeedData = require('./projectSeedData.json');
const languageSeedData = require('./languageSeedData.json');
const projectLanguageSeedData = require('./projectLanguageSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Project.bulkCreate(projectSeedData);
  await Language.bulkCreate(languageSeedData);
  await ProjectLanguage.bulkCreate(projectLanguageSeedData);
}

seedDatabase();

 // TODO: This includes the project id when generating the languages
  // let formatLanguages = [];
  // for (let i = 0; i < languageSeedData?.length; i++) {
  //   const currentLanguage = languageSeedData[i];

  //   const updatedLanguage = {
  //     ...currentLanguage,
  //     project_id: projects[i].id
  //   }

  //   console.log("Updated Language: ", updatedLanguage);

  //   formatLanguages.push(updatedLanguage);
  // }

  // TODO: Uncomment to include the project id
  // const languages = await Language.bulkCreate(formatLanguages);

  // TODO: Comment this one out and use the above