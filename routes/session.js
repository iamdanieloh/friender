var router = require('express').Router()

var users = require('../services/users')
var feed = require('../services/feed')
var requireUser = require('../middleware/require_user')



router.get('/sign_up', function(req, res) {
  res.render('session/sign_up')
})

router.post('/sign_up', function(req, res) {
  console.log('Looking for email=', req.body.emailAddress)
  users.findByEmailAddress(req.body.emailAddress, function(user) {
    if(user) {
      res.render('session/sign_up', { emailAddress: req.body.emailAddress, error: 'User already exists' })
    } else {
      users.createUser({ emailAddress: req.body.emailAddress, firstName: req.body.firstName, lastName: req.body.lastName, password: req.body.password, profileUrl: req.body.profileUrl, age: req.body.age, gender: req.body.gender, location: req.body.location }, function(user){
        console.log("User created id=", user.id)
        res.cookie('userId', user.id, { signed: true }).redirect('/profile')
      })
    }
  })
})

router.get('/log_in', function(req, res) {
  res.render('session/log_in')
})

router.post('/log_in', function(req, res) {
  users.authenticate(req.body.emailAddress, req.body.password, function(user) {
    if(user) {
      res.cookie('userId', user.id, { signed: true }).redirect('/profile')
    } else {
      res.render('session/log_in', { emailAddress: req.body.emailAddress, error: 'Log In Failed' })
    }
  })
})

router.get('/profile', function(req, res) {
  users.profile(req.signedCookies.userId, function(user) {
    if(req.signedCookies.userId) {
      res.render('session/profile', {firstName: user.first_name, lastName: user.last_name, imageUrl: user.profile_url})
    } else {
      res.render('session/log_in', {error: 'Please Log In'})
    }
  })
})


router.get('/log_out', function(req, res) {
  res.clearCookie('userId').redirect('/')
})

router.get('/password_reset_sent', function(req, res) {
  res.render('session/password_reset_sent')
})

module.exports = router
