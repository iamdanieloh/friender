var router = require('express').Router()

var loadUser = require('../middleware/load_user')
var feed = require('../services/feed')



router.get('/', loadUser, function(req, res) {
  // TODO: load the next "decision" in the feed
  res.render('index', { currentUser: req.user })
})

router.post('/decide', loadUser, function(req, res) {
  // TODO: save "decision" to database
  res.redirect('/')
})

module.exports = router
