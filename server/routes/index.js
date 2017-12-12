const router = require('express').Router();
const User = require('../db/models/user');

router.use('/kingdoms', require('./kingdoms'))
router.use('/phylums', require('./phylums'))

module.exports = router;