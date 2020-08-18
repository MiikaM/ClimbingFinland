const commentsRouter = require('express').Router()
const Comment = require('../models/comment')
const { checkComment } = require('../utils/commentHandling')
const { addComment, removeComment } = require('../services/commentService')
const { authenticate } = require('../utils/middleware')


commentsRouter.get('/', async (req, res) => {
  const comments = await Comment.find({}).populate('user', { name: 1, avatar: 1, username: 1 })
  res.status(200).json(comments.map(place => place.toJSON()))
})

// commentsRouter.get('/:id', async (req, res) => {
//   const comments = await Comment.find({ place: req.params.id })
//   res.json(comments.toJSON())
// })

commentsRouter.get('/:place_id', async (req, res) => {
  const comments = await Comment.find({ place: req.params.place_id })
  res.status(200).json(comments.map(comment => comment.toJSON()))
})

commentsRouter.post('/:place_id', authenticate, async (req, res) => {

  try {
    if (!req.id) {
      res.status(401).send({ error: 'You must be logged in before commenting.' })
    }
    const newComment = await checkComment(req.body, req.params.place_id, req.id)
    console.log({ newComment })
    const addedComment = await addComment(newComment)
    res.status(201).json(addedComment.toJSON())
  } catch (e) {
    res.status(400).json({ error: e.message })
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

commentsRouter.delete('/:id', authenticate, async (req, res) => {
  try {
    await removeComment(req.params.id, req.id)
    res.json(204).end()
  } catch (e) {
    res.status(401).json({ error: e.message })
  }
})

module.exports = commentsRouter