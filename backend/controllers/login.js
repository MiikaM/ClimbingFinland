const loginRouter = require('express').Router()
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
// const User = require('../models/user')
const { validateGoogleUser, validateOnSiteUser } = require('./validateLogin')

loginRouter.post('/', async (request, response) => {
  const body = request.body
  let validatedUser
  console.log({ body })

  if (body.type === 'google') {
    validatedUser = await validateGoogleUser(body.token)
  }

  if (body.type === 'onSite') {
    validatedUser = await validateOnSiteUser(body.user)
  }

  const userForToken = {
    username: validatedUser.name,
    id: validatedUser._id,
    
  }

  // const token = jwt.sign(userForToken, process.env.SECRET)

  // response
  //   .status(200)
  //   .send({ token, username: validatedUser.username, name: validatedUser.name })
})

module.exports = loginRouter