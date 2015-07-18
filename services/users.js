var dbConnect = require('./database')
var bcrypt = require('bcrypt')

module.exports = {
  findById: function(id, cb) {
    dbConnect(function(client, done) {
      client.query('SELECT id, email_address as "emailAddress" FROM users WHERE id = $1', [id], function(err, result) {
        done()
        if (err) {
          console.log(err)
          throw(err)
        }

        cb(result.rows[0])
      })
    })
  },

  findByEmailAddress: function(emailAddress, cb) {
    dbConnect(function(client, done) {
      client.query('SELECT id, email_address as "emailAddress", password_hash FROM users WHERE email_address = $1', [emailAddress], function(err, result) {
        done()
        if (err) {
          console.log(err)
          throw(err)
        }

        cb(result.rows[0])
      })
    })
  },

  authenticate: function(emailAddress, password, cb) {
    this.findByEmailAddress(emailAddress, function(user) {
      if(user) {
        bcrypt.compare(password, user.password_hash, function(err, res) {
          if(res) {
            cb(user)
          } else {
            cb(null)
          }
        })
      } else {
        cb(null)
      }
    })
  },

  profile: function(id, cb) {
    dbConnect(function(client, done) {
      client.query('SELECT * FROM users WHERE id = $1', [id], function(err, result) {
        done()
        if (err) {
          console.log(err)
          throw(err)
        }

        cb(result.rows[0])
      })
    })
  },

  createUser: function(user, cb) {
    dbConnect(function(client, done) {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
          client.query('INSERT INTO users (email_address, first_name, last_name, password_hash, profile_url, age, gender, current_location, see_m, see_w)'+
                       ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id',
                       [user.emailAddress, user.firstName, user.lastName, hash, user.profileUrl, user.age, user.gender, user.location, user.seeMen, user.seeWomen], function(err, result) {
            done()
            if (err) {
              console.log(err)
              throw(err)
            }

            user.id = result.rows[0].id
            cb(user)
          })
        })
      })
    })
  }
}
