const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
// const User = require('../models/user')
const { validateGoogleUser, validateOnSiteUser } = require('./validateLogin')

loginRouter.post('/', async (request, response) => {
  const body = request.body
  let validatedUser
  if (body.type === 'google') {
    try {
      validatedUser = await validateGoogleUser(request.token)
    } catch (e) {
      return response.status(401).json({
        error: e.message
      })
    }
  }

  if (body.type === 'onSite') {
    try {
      validatedUser = await validateOnSiteUser(body.user)
    } catch (e) {
      return response.status(401).json({ error: e.message })
    }
  }

  const userForToken = validatedUser

  if (!userForToken) {
    return response.status(400).json({
      error: 'User doesn\'t exist'
    })
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response.status(200).send({ token, name: userForToken.name, id: userForToken.id })
})

module.exports = loginRouter