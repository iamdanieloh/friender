// make sure user is logged in or redirect them to '/'
// assume that we used the loadUser middleware ahead of this one
module.exports = function (req, res, next) {
  if(!req.user){
    req.redirect('/')
    return
  }

  next()

  // if(!req.signedCookies.userId)
  //   return next()

  // console.log("Looking for user with ID="+req.signedCookies.userId)
  // users.findById(req.signedCookies.userId, function(user){
  //   if(user) {
  //     console.log("Logged in as "+ user.emailAddress)
  //     req.user = user
  //   } else {
  //     console.log("Could not find user with ID="+req.signedCookies.userId)
  //   }
  //   next()
  // })
}
