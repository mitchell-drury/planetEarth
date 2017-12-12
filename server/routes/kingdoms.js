const router = require('express').Router()
const {Kingdom} = require('../db/models')

router.get('/', function(req,res,next){
    Kingdom.findAll()
    .then(kingdoms => res.json(kingdoms))
    .catch(next)
})

// router.put('/', function(req, res, next){
//     Kingdom.create()
// })

module.exports = router;