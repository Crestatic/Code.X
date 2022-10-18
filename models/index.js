const User = require('./User');
const Project = require('./Project');
const Language = require('./Language');
const Interest = require('./Interest');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(User, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

User.belongsTo(Project, {
  foreignKey: 'project_id'
});

Project.hasMany(Language, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Language.belongsTo(Project, {
  foreignKey: 'project_id',
});

Language.hasMany(Project, {
  foreignKey: 'language_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(Language, {
  foreignKey: 'language_id'
});

Project.hasOne(Interest, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Interest.belongsTo(Project, {
  foreignKey: 'project_id',
});


module.exports = { User, Project, Language, Interest };
