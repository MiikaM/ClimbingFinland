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

      console.log({ body })
      validatedUser = await validateOnSiteUser(body.user)
      console.log({ validatedUser })
    } catch (e) {
      logger.error(e.message)
      return response.status(401).json({ error: e.message })
    }
  }

  // response.status(204).end()

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

  if (!userForToken.verified) {
    return response.status(401).json({ error: 'Please confirm your email to login.' }).end()
  }

  console.log({ userForToken })

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

  console.log({ token })

  response.status(200).cookie('token', token, { httpOnly: true })
    .send({
      username: validatedUser.username,
      name: validatedUser.name,
      favouritePlaces: validatedUser.favouritePlaces,
      role: validatedUser.role,
      email: validatedUser.email,
      verified: validatedUser.verified,
      avatar: validatedUser.avatar,
      city: validatedUser.city
    })
})

loginRouter.get('/check', authenticate, (req, res) => {
  res.status(200).send({ user: req.user })
})

loginRouter.get('/logout', (req, res) => {
  res.clearCookie('token').status(204).end()
})

module.exports = loginRouter