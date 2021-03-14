import React from 'react'
import { useSelector } from 'react-redux'
import { Paper } from '@material-ui/core'
import Info from './info'

const Places = ({search}) => {
  const places = useSelector(state => state.places)
  const sortedPlaces = places.sort(place => place.name)
  const filteredPlaces = search === ''
    ? sortedPlaces 
    : sortedPlaces.filter(place => place.name.toUpperCase().startsWith(search.toUpperCase()))

  
  return (
    <ul className="place-list">
      {filteredPlaces.map(place => (
        <Info key={place.id} place={place} />
      ))}
    </ul>

  )
}

export default Places