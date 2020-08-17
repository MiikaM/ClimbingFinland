const commentsRouter = require('express').Router()
const Comment = require('../models/comment')
const { checkComment } = require('../utils/parse')
const { addComment, removeComment } = require('../services/commentService')
const { authenticate } = require('../utils/middleware')


commentsRouter.get('/', async (req, res) => {
  const comments = await Comment.find({}).populate('user', { name: 1, avatar: 1 })
  res.json(comments.map(place => place.toJSON()))
})

commentsRouter.get('/:id', async (req, res) => {
  const comment = await Comment.findById(req.params.id)
  res.json(comment.toJSON())
})

commentsRouter.post('/', authenticate, async (req, res) => {

  try {
    const newComment = checkComment(req.body)
    const addedComment = await addComment(newComment)
    res.status(201).json(addedComment.toJSON())
  } catch (e) {
    res.status(400).send(e.message)
  }
})

// commentsRouter.put('/:id', async (req, res) => {

//   try {
//     const place = checkPlace(req.body)

//     const updated = await updatePlace(req.params.id, place)
//     res.json(updated.toJSON()).status(204).end()
//   } catch (e) {
//     res.status(400).send(e.message)
//   }
// })

commentsRouter.delete('/:id', async (req, res) => {
  try {
    removeComment(req.params.id)
    res.json(204).end()
  } catch (e) {
    res.status(401).json()
  }
})

module.exports = commentsRouter