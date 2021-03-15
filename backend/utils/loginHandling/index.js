const admin = require('../../services/firebaseService')
const bcrypt = require('bcrypt')
const ThirdPartyUser = require('../../models/thirdPartyUser')
const UserBase = require('../../models/userBase')
const { userCheckerThirdParty } = require('../userHandling')
const logger = require('../logger')

/**
 * Validates the google user with access tokens ['ticket'] property
 * @param {*} token google access token
 * @returns the user document in the database
 */
const validateGoogleUser = async (token) => {
  const ticket = await checkTicket(token)
  const userId = ticket['sub']
  let userInDb = await ThirdPartyUser.findOne({ idSub: userId })

  if (!userInDb) {
    try {
      const userToSave = await userCheckerThirdParty(ticket)
      userInDb = await userToSave.save()
    } catch (e) {
      logger.error(e.message)
      throw new Error('Error on registering thirdparty user.')
    }
  }


  return userInDb

}

/**
 * validates onsite user. findss the document by username and checks if the passwrod is correct.
 * @param {*} user login information
 * @returns user document in the database
 */
const validateOnSiteUser = async (user) => {

  const userInDb = await UserBase.findOne({ username: user.username })

  if (!userInDb) {
    throw Error('Invalid username or password.')
  }


  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(user.password, userInDb.password)

  if (!(user && passwordCorrect)) {
    throw Error('invalid username or password')
  }


  return userInDb
}

/**
 *  Verifies the id token with firebase.auth()
 * @param {*} token 
 * @returns verified token information
 */
const checkTicket = async (token) => {
  try {
    const ticket = await admin.auth().verifyIdToken(token)
    return ticket
  } catch (err) {
    logger.error(err.message)
  }
}

/**
 * Checks if the user is an Admin
 * @param {*} username username inputted
 */
const checkAdmin = async (username) => {
  console.log({username})
  
  const user = await UserBase.findOne({username: username})

  if (!user) {
    throw new Error('invalid username or password')
  }

  const boolean = (user.type === 'AdminUser' && user.role === 'Admin')

  if (!boolean) {
    throw new Error('You are not authorized to add a new place.')
  }
}

/**
 * Checks if the user is verified
 * @param {*} verified 
 */
const checkVerified = (verified) => {
  if (!verified) {
    throw new Error('You have to verify your account first.')
  }
}

module.exports = {
  validateGoogleUser,
  validateOnSiteUser,
  checkAdmin,
  checkVerified
}