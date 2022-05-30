const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/:name', function(req, res, next) {
  res.status(200).sendFile(req.params.name, { root: path.join(__dirname, '../images')} )
})


module.exports = router
