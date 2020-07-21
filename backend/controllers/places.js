const placesRouter = require('express').Router()
const Place = require('../models/place')


placesRouter.get('/', async (req, res) => {
  const places = await Place.find({})
  res.json(places.map(place => place.toJSON()))
})

placesRouter.post('/', async (req, res) => {
  const body = req.body

  const place = new Place({
    name: body.name,
    description: body.description,
    url: body.url,
    open_hours: body.open_hours,
    prices: body.prices,
    picture: body.picture,
    tags: body.tags,
    
  })

  const placeToSave = await place.save()
  res.status(201).json(placeToSave.toJSON())
})

placesRouter.put('/:id', async (request, response) => {
  const place = request.body
  const placeToUpdate = await Place.findByIdAndUpdate(request.params.id, place, { new: true })
  if (placeToUpdate) {
    response.json(placeToUpdate.toJSON()).status(204).end()
  } else {
    response.status(404).end()
  }
})

module.exports = placesRouter