const jwt = require('jsonwebtoken')
const admin = require('../services/firebaseService')
const bcrypt = require('bcrypt')
const ThirdPartyUser = require('../models/thirdPartyUser')
const UserBase = require('../models/userBase')
const { userCheckerThirdParty } = require('./userChecker')
const logger = require('../utils/logger')



const validateGoogleUser = async (token) => {
  const ticket = await checkTicket(token)
  const userId = ticket['sub']
  let userInDb = await ThirdPartyUser.findOne({ idSub: userId })
  
  if (!userInDb) {
    try {
      const userToSave = userCheckerThirdParty(ticket)
      userInDb = await userToSave.save()
    } catch (e) {
      logger.error(e.message)
      throw new Error('Error on registering thirdparty user.')
    }
  }

  const userForToken = {
    name: userInDb.name,
    email: userInDb.email,
    id: userInDb._id
  }

  return userForToken

}

const validateOnSiteUser = async (user) => {

  const userInDb = await UserBase.findOne({ username: user.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(user.password, userInDb.password)

  if (!(user && passwordCorrect)) {
    throw Error('invalid username or password')
  }

  console.log({userInDb})

  const userForToken = {
    username: userInDb.username,
    email: userInDb.email,
    avatar: userInDb.avatar,
    name: userInDb.name,
    id: userInDb._id,
  }

  return userForToken
}

const checkTicket = async (token) => {
  try {
    const ticket = await admin.auth().verifyIdToken(token)
    return ticket
  } catch (e) {
    
    throw Error('Error on verifying Google user: ', e.message)
  }
}

module.exports = {
  validateGoogleUser,
  validateOnSiteUser
}