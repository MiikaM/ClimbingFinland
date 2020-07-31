const Comment = require('../models/Comment')

const addComment = async (Comment) => {
  const newComment = new Comment({
    ...Comment
  })

  const savedComment = await newComment.save()
  return savedComment
}

const removeComment = async (id) => {
  const commentToRemove = await Comment.findByIdAndDelete(id)

  if (!commentToRemove) {
    throw new Error('Couldn\'t find Comment a with this id')
  }

  return commentToRemove
}

module.exports = {
  addComment,
  removeComment
} 