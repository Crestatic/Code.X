const User = require('./User');
const Project = require('./Project');
const Language = require('./Language');
const ProjectLanguage = require('./ProjectLanguage');
const Feedback = require('./Feedback');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Language.belongsToMany(Project, {
  through: ProjectLanguage,
  foreignKey: 'language_id',
});

Project.belongsToMany(Language, {
  through: ProjectLanguage,
  foreignKey: 'project_id'
});



module.exports = { User, Project, Language, ProjectLanguage, Feedback };
