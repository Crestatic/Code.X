const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectInterest extends Model {}

ProjectInterest.init(
  {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    interest_id: {
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
    interest_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'interest',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'projectinterest',
  }
);

module.exports = ProjectInterest;