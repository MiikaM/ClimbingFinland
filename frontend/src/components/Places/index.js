import React from 'react'
import { useSelector } from 'react-redux'
import { Paper } from '@material-ui/core'
import Info from './info'

const Places = () => {
  const places = useSelector(state => state.places)
  const sortedPlaces = places.sort(place => place.name)


  return (
    <ul className="place-list">
      {sortedPlaces.map(place => (
        <Info key={place.id} place={place} />
      ))}
    </ul>

  )
}

export default Places