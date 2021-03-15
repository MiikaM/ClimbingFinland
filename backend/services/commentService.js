const Comment = require('../models/comment')
const UserBase = require('../models/userBase')
const logger = require('../utils/logger')

/**
 * Saves the comment to the database
 * @param {*} comment comment info
 * @returns Saved comment
 */

const addComment = async (comment) => {
  const newComment = new Comment({
    ...comment
  })

  const savedComment = await newComment.save()
  return savedComment
}

/**
 * Removes a comment of a user (not implemented on the website). 
 * @param {*} id comment id 
 * @param {*} user_id users' id who's deleting the comment
 * @returns 
 */
const removeComment = async (id, user_id) => {
  const user = await UserBase.findById(user_id)
  const commentToRemove = await Comment.findById(id)

  if (!commentToRemove) {
    throw new Error('Couldn\'t find Comment a with this id')
  }

  if (commentToRemove.user.toString() !== user.id.toString()) {
    throw new Error('You are not allowed to remove another users comments.')
  }

  await commentToRemove.deleteOne()

  return commentToRemove
}

module.exports = {
  addComment,
  removeComment
} 