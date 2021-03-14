const usersRouter = require('express').Router()
const UserBase = require('../models/userBase')
const { userChecker, resizeImage } = require('../utils/userHandling')
const { removeUser, sendVerificationEmail, updateUser, changePassword } = require('../services/userService')
const logger = require('../utils/logger')
const upload = require('../utils/multer')
const fs = require('fs')
const { authenticate } = require('../utils/middleware')
const { checkVerified } = require('../utils/loginHandling')
const jwt = require('jsonwebtoken')


usersRouter.get('/', async (request, response) => {
  const users = await UserBase.find({}).populate('favouritePlaces', { name: 1, description: 1 })
  response.json(users.map(u => u.toJSON()))
})

//TODO: Muuta Haettavaksi usernamella
usersRouter.get('/:username', async (request, response) => {
  const user = await UserBase.findOne({ username: request.params.username })
  if (user) {
    response.json(user.toJSON())
  } else {
    response.status(404).end()
  }
})


usersRouter.post('/', async (request, response) => {
  const body = request.body

  try {
    const userToSave = await userChecker(body)
    const savedUser = await userToSave.save()
    sendVerificationEmail(savedUser)
    response.status(204).end()
  } catch (e) {
    response.status(401).json({ error: e.message })
  }
})

usersRouter.delete('/:id', authenticate, async (request, response) => {

  try {
    await removeUser(request.params.id, request.username)
    response.json(204).end()
  } catch (e) {
    logger.error(e)
    response.status(401).json({ error: e.message })
  }
})


//TODO: Jatka tästä
usersRouter.put('/:username', authenticate, async (req, res) => {
  const body = req.body
  try {

    checkVerified(req.user.verified)
    const updatedUser = await updateUser(req.params.username, req.user, body)

    const userForToken = { ...updatedUser }
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

    res.status(200).cookie('token', token, { httpOnly: true, expires: new Date(Date.now() + 60000) })
      .send({
        username: updatedUser.username,
        description: updatedUser.description,
        name: updatedUser.name,
        favouritePlaces: updatedUser.favouritePlaces,
        role: updatedUser.role,
        email: updatedUser.email,
        verified: updatedUser.verified,
        avatar: updatedUser.avatar,
        city: updatedUser.city,
        type: updatedUser.type

      })
  } catch (e) {
    res.status(400).send(e.message)
  }
})

usersRouter.put('/changePassword/:username', authenticate, async (req, res) => {
  const body = req.body

  try {
    await changePassword(body, req.user)
    res.status(204).end()
  } catch (err) {
    res.status(401).send(err.message)
  }

})


usersRouter.put('/update/uploadImage', authenticate, upload.single('imageData'), async (req, res) => {
  const body = req.body
  const file = req.file


  try {
    checkVerified(req.user.verified)

    const user = await UserBase.findById(req.user.id)

    const resizedImagePath = await resizeImage(file)

    if (user.avatar === null || user.avatar !== '') {
      try {
        fs.unlinkSync(user.avatar)
      } catch (err) {
        logger.error(err.message)
      }

    }

    user.avatar = resizedImagePath
    const updatedUser = await user.save()

    res.status(200).json(updatedUser.toJSON())
  } catch (e) {
    logger.error(e.message)
    res.status(400).json({ error: e.message })
  }

})

module.exports = usersRouter