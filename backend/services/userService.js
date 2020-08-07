const UserBase = require('../models/userBase')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')


const removeUser = async (id, token) => {
  const userToRemove = await UserBase.findById(id)

  if (!userToRemove) {
    throw new Error('User doesn\'t exist or has already been removed')
  }

  console.log({userToRemove})

  const decodedToken = jwt.verify(token, process.env.SECRET)
  console.log({decodedToken})
  if (!token || !decodedToken.id) {
    throw new Error('token missing or invalid')
  }

  const userRemoving = await UserBase.findById(decodedToken.id)

  if (userRemoving._id.toString() !== userToRemove._id.toString()) {
    throw new Error('You are not authorized to remove this user.')
  }

  const userComments = await Comment.find({ user: userToRemove._id })

  await userToRemove.remove()

  const removeComments = userComments.map(async comment => {
    await comment.remove()
  })

  Promise.all(removeComments)

}

module.exports = {
  removeUser
}