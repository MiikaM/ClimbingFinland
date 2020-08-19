const admin = require('../../services/firebaseService')
const bcrypt = require('bcrypt')
const ThirdPartyUser = require('../../models/thirdPartyUser')
const UserBase = require('../../models/userBase')
const { userCheckerThirdParty } = require('../userHandling')
const logger = require('../logger')


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


  return userInDb

}

const validateOnSiteUser = async (user) => {

  const userInDb = await UserBase.findOne({ username: user.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(user.password, userInDb.password)

  if (!(user && passwordCorrect)) {
    throw Error('invalid username or password')
  }


  return userInDb
}

const checkTicket = async (token) => {
  try {
    const ticket = await admin.auth().verifyIdToken(token)
    return ticket
  } catch (err) {
    logger.error(err.message)
  }
}

const checkAdmin = async (id) => {
  const user = await UserBase.findById(id)
  console.log({ user })

  if (!user) {
    throw new Error('User doesn\'t exist.')
  }

  const boolean = (user.type === 'AdminUser' && user.role === 'Admin')

  if (!boolean) {
    throw new Error('You are not authorized to add a new place.')
  }
}

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