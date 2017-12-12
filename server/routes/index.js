const router = require('express').Router();

router.use('/kingdoms', require('./kingdoms'))
router.use('/phylums', require('./phylums'))

module.exports = router;