const Comment = require('../models/comment')

const addComment = async (comment) => {
  const newComment = new Comment({
    ...comment
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