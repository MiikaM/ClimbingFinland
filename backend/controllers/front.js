const frontRouter = require('express').Router()
const path = require('path')
const jwt = require('jsonwebtoken')
const UserBase = require('../models/userBase')
const logger = require('../utils/logger')

frontRouter.get('/verification/:token', async (req, res) => {
  try {
    const { user: id } = jwt.verify(req.params.token, process.env.EMAIL_SECRET)
    console.log({ id })
    const user1 = await UserBase.findByIdAndUpdate(id, { verified: true })
    console.log({ user1 })
  } catch (err) {
    logger.error(err.message)
  }

  return res.redirect('http://localhost:3001/api/users')
})
// frontRouter.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
// })

// frontRouter.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
// })

module.exports = frontRouter