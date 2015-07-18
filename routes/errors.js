module.exports = function(showStackTrace){

  var router = require('express').Router()

  // error handlers

  // catch 404 and forward to error handler
  router.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  // development error handler
  // will print stacktrace
  if (showStackTrace) {
    router.use(function(err, req, res, next) {
      console.error(err.message, err)
      res.status(err.status || 500)
      res.render('error', {
        message: err.message,
        error: err
      })
    })
  }

  // production error handler
  // no stacktraces leaked to user
  router.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: {}
    })
  })

  return router
}
