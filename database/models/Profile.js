const { connector, Sequelize } = require('../configuration/dbConfig');

module.exports = connector.define('profile', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
})