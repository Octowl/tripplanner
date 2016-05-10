var Sequelize = require('sequelize');

function Activity(db) {
    return db.define('activity', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age_range: {
            type: Sequelize.STRING
        }
    });
}

module.exports = Activity;
