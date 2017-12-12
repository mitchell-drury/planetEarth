const User = require('./user');
const Kingdom = require('./kingdom');
const Phylum = require('./phylum');

Phylum.belongsTo(Kingdom);
Kingdom.hasMany(Phylum);

module.exports = { User, Kingdom, Phylum }