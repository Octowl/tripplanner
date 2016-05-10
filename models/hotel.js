var Sequelize = require('sequelize');

function Hotel(db) {
    return db.define('hotel', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        num_stars: {
            type: Sequelize.INTEGER,
            validate: {
                min: 1,
                max: 5,
            }
        },
        amenities: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            default: [],
            get: function() {
                return this.getDataValue('tags').join(', ');
            },
            set: function (tags) {
                tags = tags || [];
                if (typeof tags === 'string') {
                    tags = tags.split(',').map(function (str) {
                        return str.trim();
                    });
                }
                this.setDataValue('tags', tags);
            }
        }
    });
}

module.exports = Hotel;
