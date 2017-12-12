const router = require('express').Router()
const {Phylum} = require('../db/models')

router.get('/phylums', function(req,res,next){
    Phylum.findAll()
    .then(phylums => res.json(phylums))
    .catch(next)
})

module.exports = router;