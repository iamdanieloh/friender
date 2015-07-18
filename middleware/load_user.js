var users = require('../services/users')

module.exports = function loadUser(req, res, next) {
  if(!req.signedCookies.userId)
    return next()

  console.log("Looking for user with ID="+req.signedCookies.userId)
  users.findById(req.signedCookies.userId, function(user){
    if(user) {
      console.log("Logged in as "+ user.emailAddress)
      req.user = user
    } else {
      console.log("Could not find user with ID="+req.signedCookies.userId)
    }
    next()
  })
}
