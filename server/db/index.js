const db = require('./db')

// register models
require('./models/user')
require('./models/kingdom')
require('./models/phylum')

module.exports = db