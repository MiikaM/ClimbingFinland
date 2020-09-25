const commentsRouter = require('express').Router()
const Comment = require('../models/comment')
const { checkComment } = require('../utils/commentHandling')
const { addComment, removeComment } = require('../services/commentService')
const { authenticate } = require('../utils/middleware')
const Place = require('../models/place')
const logger = require('../utils/logger')


commentsRouter.get('/', async (req, res) => {
  const comments = await Comment.find({}).populate('user', { name: 1, avatar: 1, username: 1 })
  res.status(200).json(comments.map(place => place.toJSON()))
})

// commentsRouter.get('/:id', async (req, res) => {
//   const comments = await Comment.find({ place: req.params.id })
//   res.json(comments.toJSON())
// })

commentsRouter.get('/:place_name', async (req, res) => {
  logger.info(req.params.place_name)
  const place = await Place.findOne({ name: req.params.place_name })

  logger.info({place})
  if (!place) {
    res.status(404).send({ error: 'We couln\'t find the place you were looking for.' }.toJSON())
  }
  const comments = await Comment.find({ place: place._id }).populate('user', { name: 1, avatar: 1, username: 1 })
  logger.info({comments})
  res.status(200).json(comments.map(comment => comment.toJSON()))
})

commentsRouter.post('/', authenticate, async (req, res) => {
  const body = req.body
  try {

    const newComment = await checkComment(body, body.id, req.user.id)
    console.log({ newComment })
    const addedComment = await addComment(newComment)
    console.log({addedComment})
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
    await removeComment(req.params.id, req.user.id)
    res.json(204).end()
  } catch (e) {
    res.status(401).json({ error: e.message })
  }
})

module.exports = commentsRouter