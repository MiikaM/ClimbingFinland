import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

const ChosenPlace = () => {
  const places = useSelector(state => state.places)
  const match = useRouteMatch('/places/:id')
  const place = match
    ? places.find(place => place.id === match.params.id)
    : null

  return (
    <div>
      Helloo there
    </div>
  )
}