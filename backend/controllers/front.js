const frontRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const UserBase = require('../models/userBase')
const logger = require('../utils/logger')
const { resetAuthentication } = require('../utils/middleware')
const { hashPassword } = require('../services/userService')

frontRouter.get('/verification/:token', async (req, res) => {
  try {
    const { user: id } = jwt.verify(req.params.token, process.env.EMAIL_SECRET)
    await UserBase.findByIdAndUpdate(id, { verified: true })
  } catch (err) {
    logger.error(err.message)
  }

  return res.redirect('http://localhost:3001/api/users')
})

frontRouter.post('/forgot', async (req, res) => {
  const body = req.body
  const user = await UserBase.findOne({ email: body.email })

  if (!user) {
    res.status(400).send({ error: 'User doesn\'t exist' }).end()
  }

  // sendResetPasswordEmail({ email: user.email, id: user.id })

  res.status(204).end()
})

frontRouter.get('/passwordReset/:token', async (req, res) => {
  try {

    const token = req.params.token
    const { user: id } = jwt.verify(req.params.token, process.env.RESET_SECRET)
    const userInDb = await UserBase.findByIdAndUpdate(id)
    if (!userInDb) {
      res.status(404).end()
    }

    //To front
    return res.cookie('token', token, { httpOnly: true }).redirect('http://localhost:3001/reset_password')

  } catch (err) {
    logger.error(err.message)
  }

})

frontRouter.post('/passwordReset', resetAuthentication, async (req, res) => {
  const body = req.body
  try {
    const user = await UserBase.findById(req.id)

    const passwordHash = hashPassword(body)

    user.password = passwordHash

    await user.save()

    res.status(204).redirect('http://localhost:3001/')
  }
  catch (err) {
    logger.error(err.message)
  }
})

frontRouter.get('')
// frontRouter.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
// })

// frontRouter.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
// })

module.exports = frontRouter