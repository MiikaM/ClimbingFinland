const usersRouter = require('express').Router()
const UserBase = require('../models/userBase')
const Image = require('../models/image')
const { userChecker } = require('../utils/userHandling')
const { removeUser } = require('../services/userService')
const logger = require('../utils/logger')
const upload = require('../utils/multer')
const jwt = require('jsonwebtoken')


usersRouter.get('/', async (request, response) => {
  const users = await UserBase.find({}).populate('favouritePlaces', { name: 1, description: 1 })

  response.json(users.map(u => u.toJSON()))
})

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
    response.json(savedUser)
  } catch (e) {
    response.status(401).json({ error: e.message })
  }
})

usersRouter.delete('/:id', async (request, response) => {

  try {
    await removeUser(request.params.id, request.token)
    response.json(204).end()
  } catch (e) {
    logger.error(e)
    response.status(401).json({ error: e.message })
  }
})

usersRouter.put('/uploadImage/:id', upload.single('imageData'), async (req, res) => {
  console.log(req.body)
  const body = req.body
  const file = req.file

  const decodedToken = jwt.verify(req.token, process.env.SECRET)
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await UserBase.findById(decodedToken.id)

  const newImage = new Image({
    imageName: body.imageName,
    imageData: file.path
  })

  try {
    const imageSaved = await newImage.save()

    console.log({ imageSaved })

    user.avatar = imageSaved.id

    res.status(200).json({
      success: true,
      document: imageSaved
    })
  } catch (e) {
    logger.error(e.message)
    res.status(400).json({ error: e.message })
  }

})

module.exports = usersRouter