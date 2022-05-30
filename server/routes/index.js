const express = require('express')
const router = express.Router()
const profilesJson = require('../profiles/example.json')

router.get('/auth', function(req, res, next) {
  res.status(200).json({
    id: 10000,
    name: 'Me'
  })
})

router.get('/profiles', function(req, res, next) {
  res.status(200).json(profilesJson)
})
router.get('/profiles/:id', function(req, res, next) {
  const id = +req.params.id
  let found = null
  for (let profilesJsonKey in profilesJson) {
    if(id === profilesJson[profilesJsonKey].id) {
      found = profilesJson[profilesJsonKey]
      found.info = 'More info about this person'
      return res.status(200).json(found)
    }
  }
  return res.status(404).json({msg: 'This profile no more available'})
})

router.post('/profiles/like', function(req, res, next) {
  const random = Math.floor(Math.random() * 2)
  res.status(200).json({status: random ? 'Ok' : 'No'})
})

module.exports = router
