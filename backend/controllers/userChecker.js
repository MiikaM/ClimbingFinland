const AdminUser = require('../models/adminUser')
const bcrypt = require('bcrypt')
const OnSiteUser = require('../models/onSiteUser')


const userChecker = async (user_data) => {
  console.log({user_data})

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

module.exports = {
  userChecker
}