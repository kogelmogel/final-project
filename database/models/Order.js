const { connector, Sequelize } = require('../configuration/dbConfig');
const Profile = require('../models/Profile');

module.exports = connector.define('order', {
    nameClient: Sequelize.STRING,
    nameSo: Sequelize.STRING,
    service: Sequelize.STRING,
    contactSo: Sequelize.STRING,
    situation: Sequelize.TEXT,
    message: Sequelize.TEXT,
    orderExecuted: { type: Sequelize.BOOLEAN, defaultValue: false }
})

Profile.hasmany(Order);
Order.belongsTo(Profile);