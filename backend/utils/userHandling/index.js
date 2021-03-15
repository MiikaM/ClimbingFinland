const AdminUser = require('../../models/adminUser')
const bcrypt = require('bcrypt')
const OnSiteUser = require('../../models/onSiteUser')
const ThirdPartyUser = require('../../models/thirdPartyUser')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const logger = require('../logger')
const UserBase = require('../../models/userBase')
const { hashPassword } = require('../../services/userService')

/**
 * Checks if the user data is correct
 * @param {*} user_data Registering username, password, password confirmation, username, adminverification, name etc.
 * @returns The created user document 
 */
const userChecker = async (user_data) => {


  if (!user_data.password) {
    throw new Error('Password is invalid')
  }
  const passwords = { newPassword: user_data.password, newPasswordAgain: user_data.passwordagain }
  const passwordHash = await hashPassword(passwords)

  if (user_data.adminVerification && user_data.adminVerification === process.env.ADMINSECRET) {
    return createAdmin(user_data, passwordHash)
  }

  return createOnSite(user_data, passwordHash)
}

/**
 * Verifies that the user is a real google user
 * @param {*} user_data google token information
 * @returns the created user document
 */
const userCheckerThirdParty = async (user_data) => {

  if (user_data.iss !== process.env.PROJECT_ISS || user_data.aud !== process.env.PROJECT_ID || !checkIatExp(user_data.iat, user_data.exp)) {
    throw new Error('User token is not authenticated by google.')
  }

  const user = await createThirdParty(user_data)


  if (!user) {
    throw new Error('User creation failed.')
  }

  return user
}

/**
 * Checks the tokens validity
 * @param {*} iat assigned time for the token
 * @param {*} exp expiring time for the token
 * @returns boolean for if the token is still valid
 */
const checkIatExp = (iat, exp) => {
  const iatCorrect = ((Math.round((new Date()).getTime() / 1000)) > iat)
  const expCorrect = ((Math.round((new Date()).getTime() / 1000)) < exp)
  return (iatCorrect && expCorrect)
}

/**
 * Takes thirdparty information and creates a new Thirdparty user
 * @param {*} thirdParty_data thirdparty data
 * @returns the user object
 */
const createThirdParty = async (thirdParty_data) => {

  if (!thirdParty_data.email_verified) {
    throw new Error('In order to use a Google account to sign in, you must have your google account verified.')
  }
  const thirdParty = new ThirdPartyUser({
    username: await hashUsername(thirdParty_data.name),
    idSub: thirdParty_data.sub,
    name: thirdParty_data.name,
    verified: thirdParty_data.email_verified,
    email: thirdParty_data.email,
    avatar: thirdParty_data.picture
  })


  return thirdParty
}

/**
 * @param {*} min minimum
 * @param {*} max maximum
 * @returns a random integer in between min, max
 */
const rndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * hashes an username. User for thirdparty users  
 * @param {*} name users name
 * @returns a hashed name
 */
const hashUsername = async (name) => {

  const nameSplitted = name.split(' ')
  let boolean = true
  let usernameJoined = ''
  while (boolean) {
    const username = nameSplitted.map(namePart => namePart.substring(0, rndInteger(0, namePart.length)))
    usernameJoined = username.join('').toLowerCase()
    const user = await UserBase.find({ username: username })

    if (user.length > 0) {
      continue
    }

    if (usernameJoined.length < 6) continue
    boolean = false
  }

  return usernameJoined

}

/**
 * Creates a admin user based on the inputted data
 * @param {*} admin_data inputted data for the user 
 * @param {*} passwordHash hashed password for the database
 * @returns the user object
 */
const createAdmin = (admin_data, passwordHash) => {

  const admin = new AdminUser({
    name: admin_data.username,
    username: admin_data.username,
    email: admin_data.email,
    password: passwordHash,
    city: admin_data.city,
    description: admin_data.description
  })

  return admin
}

/**
 * Creates a onsite Enduser (normal) based on the inputted data
 * @param {*} onSite_data inputted data for the user 
 * @param {*} passwordHash hashed password for the database
 * @returns the user object
 */
const createOnSite = (onSite_data, passwordHash) => {

  const onSite = new OnSiteUser({
    name: onSite_data.username,
    username: onSite_data.username,
    email: onSite_data.email,
    password: passwordHash,
    city: onSite_data.city,
    description: onSite_data.description
  })

  return onSite
}

/**
 * Rezises and optimizes the image used for user profile pictures
 * @param {*} image image data inputted
 * @returns a new path for the image file
 */
const resizeImage = async (image) => {

  try {
    const resizePath = `${process.env.UPLOAD_FOLDER_RESIZED}${image.filename}`
    const resized = await sharp(image.path)
      .resize({
        fit: sharp.fit.contain,
        width: 370
      })
      .webp({ quality: 85, lossless: true })
      .toFile(
        path.resolve(resizePath)
      )

    fs.unlinkSync(image.path)

    return resizePath
  } catch (e) {
    logger.error(e.message)
  }
}

module.exports = {
  userChecker,
  userCheckerThirdParty,
  resizeImage
}