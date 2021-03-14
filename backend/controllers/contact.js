const contactRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const UserBase = require('../models/userBase')
const path = require('path')
const logger = require('../utils/logger')
const { resetAuthentication } = require('../utils/middleware')
const { hashPassword, sendResetPasswordEmail } = require('../services/userService')
const { sendContactInfo } = require('../services/contactService')

contactRouter.get('/verification/:token', async (req, res) => {
  try {
    const { user: id } = jwt.verify(req.params.token, process.env.EMAIL_SECRET)
    await UserBase.findByIdAndUpdate(id, { verified: true })
  } catch (err) {
    logger.error(err.message)
  }

  return res.redirect('http://localhost:3000/')
})

contactRouter.post('/forgot', async (req, res) => {
  const body = req.body
  const user = await UserBase.findOne({ email: body.email })


  if (!user) {
    res.status(400).send({ error: 'User doesn\'t exist' }).end()
  }

  sendResetPasswordEmail({ email: user.email, id: user.id })

  res.status(204).end()
})

contactRouter.post('/contact', async (req, res) => {
  const body = req.body
  try {
    sendContactInfo(req.body)
  } catch (err) {
    logger.error({ err })
  }
  res.status(200).send({ notification: 'Your message has been sent. We will be in touch with you shortly!' }).end()
})

contactRouter.get('/passwordReset/:token', async (req, res) => {
  try {

    const token = req.params.token
    const user = jwt.verify(req.params.token, process.env.RESET_SECRET)
    const userInDb = await UserBase.findById(user.user.id)
    if (!userInDb) {
      res.status(404).end()
    }

    //To front
    return res.cookie('token_reset', token, { httpOnly: true }).redirect('http://localhost:3000/reset_password')

  } catch (err) {
    logger.error(err.message)
  }

})

contactRouter.post('/passwordReset', resetAuthentication, async (req, res) => {
  const body = req.body
  try {
    const user = await UserBase.findById(req.id)

    const passwordHash = await hashPassword(body)

    user.password = passwordHash

    await user.save()
    
    res.clearCookie('token_reset').status(204).end()
  }
  catch (err) {
    logger.error(err.message)
  }
})

module.exports = contactRouter