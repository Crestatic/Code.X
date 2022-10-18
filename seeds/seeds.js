const sequelize = require('../config/connection');
const { Feedback } = require('../models')

const feedbackSeedData = require('./feedbackSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    
}