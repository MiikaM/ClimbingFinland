const AdminUser = require('../../models/adminUser')
const bcrypt = require('bcrypt')
const OnSiteUser = require('../../models/onSiteUser')
const ThirdPartyUser = require('../../models/thirdPartyUser')
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const logger = require('../logger')


const userChecker = async (user_data) => {
  console.log({ user_data })

  if (!user_data.password || user_data.password.length < 3) {
    throw new Error('Password minimun length is 3')
  }

  const saltRounds = 11
  const passwordHash = await bcrypt.hash(user_data.password, saltRounds)

  if (user_data.adminVerification && user_data.adminVerification === process.env.ADMINSECRET) {
    return createAdmin(user_data, passwordHash)
  }

  return createOnSite(user_data, passwordHash)
}

const userCheckerThirdParty = (user_data) => {
  console.log({ user_data })

  if (user_data.iss !== process.env.PROJECT_ISS || user_data.aud !== process.env.PROJECT_ID || !checkIatExp(user_data.iat, user_data.exp)) {
    throw new Error('User token is not authenticated by google.')
  }

  const user = createThirdParty(user_data)

  console.log({ user })

  if (!user) {
    throw new Error('User creation failed.')
  }

  return user
}

const checkIatExp = (iat, exp) => {
  const iatCorrect = ((Math.round((new Date()).getTime() / 1000)) > iat)
  const expCorrect = ((Math.round((new Date()).getTime() / 1000)) < exp)
  return (iatCorrect && expCorrect)
}

const createThirdParty = (thirdParty_data) => {
  console.log({ thirdParty_data })

  const thirdParty = new ThirdPartyUser({
    idSub: thirdParty_data.sub,
    name: thirdParty_data.name,
    verified: thirdParty_data.email_verified,
    email: thirdParty_data.email,
    avatar: thirdParty_data.picture
  })

  return thirdParty
}

const createAdmin = (admin_data, passwordHash) => {

  const admin = new AdminUser({
    name: admin_data.username,
    username: admin_data.username,
    email: admin_data.email,
    password: passwordHash
  })

  return admin
}

const createOnSite = (onSite_data, passwordHash) => {

  const onSite = new OnSiteUser({
    name: onSite_data.username,
    username: onSite_data.username,
    email: onSite_data.email,
    password: passwordHash
  })

  return onSite
}

const resizeImage = async (image) => {
  console.log({ image })

  try {
    const resizePath = `${image.destination}resized/${image.filename}`
    const resized = await sharp(image.path)
      .resize({
        fit: sharp.fit.contain,
        width: 370
      })
      .webp({ quality: 85, lossless: true })
      .toFile(
        path.resolve(resizePath)
      )
    // console.log({ resized })
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