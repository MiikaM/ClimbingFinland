const placesRouter = require('express').Router()
const Place = require('../models/place')
const { checkPlace } = require('../utils/placeHandling')
const { addPlace, updatePlace, removePlace } = require('../services/placeService')
const { authenticate } = require('../utils/middleware')
const { checkAdmin, checkVerified } = require('../utils/loginHandling')

placesRouter.get('/', async (req, res) => {
  const places = await Place.find({})
  res.json(places.map(place => place.toJSON()))
})

placesRouter.post('/', authenticate, async (req, res) => {

  try {
    await checkAdmin(req.user.id)
    checkVerified(req.user.verified)
    const newPlace = checkPlace(req.body)
    const addedPlace = await addPlace(newPlace)
    res.status(201).json(addedPlace.toJSON())
  } catch (e) {
    res.status(400).send(e.message)
  }
})

placesRouter.put('/:id', authenticate, async (req, res) => {

  try {
    await checkAdmin(req.user.id)
    checkVerified(req.user.verified)
    const place = checkPlace(req.body)
    const updated = await updatePlace(req.params.id, place)
    res.json(updated.toJSON()).status(204).end()
  } catch (e) {
    res.status(400).send(e.message)
  }
})

placesRouter.delete('/:id', authenticate, async (req, res) => {

  try {
    await checkAdmin(req.user.id)
    checkVerified(req.user.verified)
    await removePlace(req.params.id)
    res.json(204).end()
  } catch (e) {
    res.status(401).send(e.message)
  }
})

module.exports = placesRouter