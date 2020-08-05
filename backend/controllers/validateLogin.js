const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const logger = require('../utils/logger')
const bcrypt = require('bcrypt')
const OnSiteUser = require('../models/onSiteUser')
const ThirdPartyUser = require('../models/thirdPartyUser')



const validateGoogleUser = async (token) => {
  console.log({ token })
  let userId
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
    })

    const payload = ticket.getPayload()
    userId = payload['sub']

  } catch (e) {
    throw Error('Couldn\'t validate google user', e.message)
  }

  const userFound = await ThirdPartyUser.findOne({ username: user.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(user.password, userFound.passwordHash)

  if (!(user && passwordCorrect)) {
    return status(401).json({
      error: 'invalid username or password'
    })
  }

  const userInfo = {
    id: userId
  }

  return userInfo

}

const validateOnSiteUser = async (user) => {
  console.log({ user })

  const userFound = await OnSiteUser.findOne({ username: user.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(user.password, userFound.passwordHash)

  if (!(user && passwordCorrect)) {
    return status(401).json({
      error: 'invalid username or password'
    })
  }

  return userInfo
}

module.exports = {
  validateGoogleUser,
  validateOnSiteUser
}