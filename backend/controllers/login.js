const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const { validateGoogleUser, validateOnSiteUser } = require('../utils/loginHandling')
const logger = require('../utils/logger')
const { authenticate } = require('../utils/middleware')

loginRouter.post('/', async (request, response) => {
  const body = request.body
  let validatedUser
  if (body.type === 'google') {
    try {
      validatedUser = await validateGoogleUser(request.token)
    } catch (e) {
      logger.error(e.message)

      return response.status(401).json({
        error: e.message
      })
    }
  }

  if (body.type === 'onSite') {
    try {
      validatedUser = await validateOnSiteUser(body.user)
      console.log({ validatedUser })
    } catch (e) {
      logger.error(e.message)
      return response.status(401).json({ error: e.message })
    }
  }

  const userForToken = {
    username: validatedUser.username,
    id: validatedUser.id,
    verified: validatedUser.verified,
    role: validatedUser.role
  }

  if (!userForToken) {
    return response.status(400).json({
      error: 'User doesn\'t exist'
    })
  }

  // if(!userForToken.verified) {
  //   throw new Error('Please confirm your email to login.')
  // }

  const token = jwt.sign(userForToken, process.env.SECRET, {expiresIn: '15m'})

  console.log({ token })

  response.status(200).cookie('token', token, { httpOnly: true})
    .send({
      username: validatedUser.username,
      name: validatedUser.name,
      favouritePlaces: validatedUser.favouritePlaces,
      role: validatedUser.role,
      email: validatedUser.email,
      verified: validatedUser.verified,
      avatar: validatedUser.avatar
    })
})

loginRouter.get('/check', authenticate, (req, res) => {
  res.status(200).send({ name: req.userusername })
})

module.exports = loginRouter