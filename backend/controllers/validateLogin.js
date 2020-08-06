const jwt = require('jsonwebtoken')
const admin = require('../services/firebaseService')
const bcrypt = require('bcrypt')
const ThirdPartyUser = require('../models/thirdPartyUser')
const UserBase = require('../models/userBase')



const validateGoogleUser = async (token) => {
  console.log({ token })
  let userId
  let ticket

  console.log(typeof token, process.env.CLIENT_ID)
  try {
    ticket = await admin.auth().verifyIdToken(token)
  } catch (e) {
    throw Error('Error on verifying Google user: ', e.message)
  }

  console.log({ ticket })

  userId = ticket['sub']

  console.log({ userId })


  const userFound = await ThirdPartyUser.findOne({ idSub: userId })

  if (!userFound) {
    throw Error('invalid username or password')
  }

  const userForToken = {
    name: userFound.name,
    id: userFound.idSub
  }

  return userForToken

}

const validateOnSiteUser = async (user) => {
  console.log({ user })


  const userInDb = await UserBase.findOne({ username: user.username })
  console.log({userInDb})
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(user.password, userInDb.password)

  if (!(user && passwordCorrect)) {
    throw Error('invalid username or password')
  }

  const userForToken = {
    username: userInDb.username,
    name: userInDb.name,
    id: user._id,
  }

  return userForToken
}

module.exports = {
  validateGoogleUser,
  validateOnSiteUser
}