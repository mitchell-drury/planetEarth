const Sequelize = require('sequelize')
const db = require('../db')

const Kingdom = db.define('kingdom', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Kingdom;