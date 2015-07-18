var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var favicon = require('serve-favicon')
var logger = require('morgan')
var path = require('path')

var app = express()

app.set('secret_key', process.env.SECRET_KEY || 'too many secrets')
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// middleware stack
//app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser(app.get('secret_key')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./middleware/load_user'))

// all of the routes!
app.use('/', require('./routes/feed'))
app.use('/', require('./routes/session'))

errorHandler = require('./routes/errors')
app.use(errorHandler(app.get('env') === 'development'))

module.exports = app
