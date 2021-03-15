const admin = require('firebase-admin')

/**
 * Initializes firebase.
 * auth and database.
 */
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://climbingfinland-cf142.firebaseio.com'
})

module.exports = admin