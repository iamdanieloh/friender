var router = require('express').Router()

var loadUser = require('../middleware/load_user')
var feed = require('../services/feed')



router.get('/match', loadUser, require_user, function(req, res) {
  // TODO: load the next "decision" in the feed
 feed.nextInFeed(req.signedCookies.userId, function(user){
 	res.render('session/match', { firstName: user.first_name, lastName: user.last_name, profileUrl: user.profile_url})
 })
})

router.post('/decide', loadUser, function(req, res) {
  // TODO: save "decision" to database
  res.redirect('session/match')
})

module.exports = router
