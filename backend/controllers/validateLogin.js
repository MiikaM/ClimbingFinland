const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const bcrypt = require('bcrypt')
const OnSiteUser = require('../models/onSiteUser')
const ThirdPartyUser = require('../models/thirdPartyUser')



const validateGoogleUser = async (token) => {
  console.log({ token, client })
  let userId
  let ticket

  console.log(typeof token, process.env.CLIENT_ID)
  try {
    ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
    })
  } catch (e) {
    throw Error(e)
  }


  console.log({ ticket })

  const payload = ticket.getPayload()

  console.log({ payload })

  userId = payload['sub']

  console.log({ userId })


  const userFound = await ThirdPartyUser.findOne({ idSub: userId })

  if (!userFound) {
    throw Error('invalid username or password')
  }


  const userInfo = {
    name: userFound.name,
    id: userId
  }

  return userInfo

}

const validateOnSiteUser = async (user) => {
  console.log({ user })
}

module.exports = {
  validateGoogleUser,
  validateOnSiteUser
}