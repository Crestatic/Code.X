const User = require('./User');
const Project = require('./Project');
const Language = require('./Language');
const Interest = require('./Interest');
const ProjectLanguage = require('./ProjectLanguage');

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

Project.hasOne(Interest, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Interest.belongsTo(Project, {
  foreignKey: 'project_id',
});

Interest.hasOne(Project, {
  foreignKey: 'interest_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(Interest, {
  foreignKey: 'interest_id'
});


module.exports = { User, Project, Language, Interest, ProjectLanguage };
