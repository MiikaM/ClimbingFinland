const usersRouter = require('express').Router()
const UserBase = require('../models/userBase')
const { userChecker } = require('./userChecker')


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
    console.log({body})
    const userToSave = await userChecker(body)
    console.log({userToSave})
    const savedUser = await userToSave.save()
    response.json(savedUser)
  } catch (e) {
    response.status(401).json({error: e.message})
  }
})

module.exports = usersRouter