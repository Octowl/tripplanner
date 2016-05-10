var Sequelize = require('sequelize');

function Restaurant(db) {
    return db.define('restaurant', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cuisine: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            default: [],
            get: function() {
                return this.getDataValue('cuisine').join(', ');
            },
            set: function (cuisine) {
                cuisine = cuisine || [];
                if (typeof cuisine === 'string') {
                    cuisine = cuisine.split(',').map(function (str) {
                        return str.trim();
                    });
                }
                this.setDataValue('cuisine', cuisine);
            }
        },
        price: {
            type: Sequelize.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        }

    });
}

module.exports = Restaurant;
