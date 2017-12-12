const Sequelize = require('sequelize')
const db = require('../db')

const Phylum = db.define('phylum', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Phylum;