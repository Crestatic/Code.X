const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectLanguage extends Model {}

ProjectLanguage.init(
  {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id',
      }
    },
    language_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'language',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'projectlanguage',
  }
);

module.exports = ProjectLanguage;