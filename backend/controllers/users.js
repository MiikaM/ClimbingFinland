const usersRouter = require('express').Router()
const UserBase = require('../models/userBase')
const { userChecker, resizeImage } = require('../utils/userHandling')
const { removeUser, sendVerificationEmail, updateUser } = require('../services/userService')
const logger = require('../utils/logger')
const upload = require('../utils/multer')
const fs = require('fs')
const { authenticate } = require('../utils/middleware')


usersRouter.get('/', async (request, response) => {
  const users = await UserBase.find({}).populate('favouritePlaces', { name: 1, description: 1 })
  // try {
  //   const mailIt = mailer()
  // } catch (e) {
  //   logger.error(e.message)
  // }
  response.json(users.map(u => u.toJSON()))
})

//TODO: Muuta Haettavaksi usernamella
usersRouter.get('/:id', async (request, response) => {
  const user = await UserBase.findById(request.params.id)
  if (user) {
    response.json(user.toJSON())
  } else {
    response.status(404).end()
  }
})


usersRouter.post('/', async (request, response) => {
  const body = request.body

  try {
    console.log({ body })
    const userToSave = await userChecker(body)
    console.log({ userToSave })
    const savedUser = await userToSave.save()
    sendVerificationEmail(savedUser)
    response.json(savedUser)
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

    const updated = await updateUser(req.params.username, req.id, body)
    res.json(updated.toJSON()).status(204).end()
  } catch (e) {
    res.status(400).send(e.message)
  }
})


usersRouter.put('/uploadImage', authenticate, upload.single('imageData'), async (req, res) => {
  const body = req.body
  const file = req.file

  console.log({ body })
  console.log({ file })


  const user = await UserBase.findById(req.id)

  console.log({ user })

  const resizedImagePath = await resizeImage(file)


  try {

    if (user.avatar === null || user.avatar !== '') {
      try {
        fs.unlinkSync(user.avatar)
      } catch (err) {
        logger.error(err.message)
      }

    }

    user.avatar = resizedImagePath
    const updatedUser = await user.save()

    console.log({ updatedUser })

    res.status(200).json(updatedUser.toJSON())
  } catch (e) {
    logger.error(e.message)
    res.status(400).json({ error: e.message })
  }

})

module.exports = usersRouter