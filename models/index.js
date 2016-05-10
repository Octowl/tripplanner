var Sequelize = require('sequelize');

var dbPath = process.env.MODE === 'test' ? 'tripplannertest' : 'tripplanner';

var db = new Sequelize('postgres://localhost:5432/' + dbPath, {
    logging: false
});

var Place = require('./place')(db);
var Hotel = require('./hotel')(db);
var Activity = require('./activity')(db);
var Restaurant = require('./restaurant')(db);

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports.Place = Place;
module.exports.Hotel = Hotel;
module.exports.Activity = Activity;
module.exports.Restaurant = Restaurant;
module.exports.db= db; 
