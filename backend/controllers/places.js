const placesRouter = require('express').Router()
const Place = require('../models/place')
const { checkPlace } = require('../utils/parse')
const { addPlace, updatePlace, removePlace } = require('../services/placeService')
const logger = require('../utils/logger')
const { authenticate } = require('../utils/middleware')

placesRouter.get('/', async (req, res) => {
  const places = await Place.find({})
  res.json(places.map(place => place.toJSON()))
})

placesRouter.post('/', authenticate, async (req, res) => {

  try {
    const newPlace = checkPlace(req.body)
    const addedPlace = await addPlace(newPlace)
    res.status(201).json(addedPlace.toJSON())
  } catch (e) {
    res.status(400).send(e.message)
  }
})

placesRouter.put('/:id', authenticate, async (req, res) => {

  try {
    const place = checkPlace(req.body)

    const updated = await updatePlace(req.params.id, place)
    res.json(updated.toJSON()).status(204).end()
  } catch (e) {
    res.status(400).send(e.message)
  }
})

placesRouter.delete('/:id', authenticate, async (req, res) => {
  try {
    removePlace(req.params.id)
    res.json(204).end()
  } catch (e) {
    res.status(401).json()
  }
})

module.exports = placesRouter