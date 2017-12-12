const router = require('express').Router()
const {Kingdom} = require('../db/models')

router.get('/kingdoms', function(req,res,next){
    Kingdom.findAll()
    .then(kingdoms => res.json(kingdoms))
    .catch(next)
})

module.exports = router;