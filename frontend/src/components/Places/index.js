import React from 'react'
import { useSelector } from 'react-redux'
import Info from './info'

const Places = () => {
  const places = useSelector(state => state.places)
  const sortedPlaces = places.sort(place => place.name)


  return (
    <div>
      <h1> Climbing places</h1>

      <div>
        {sortedPlaces.map(place => (
          <Info key={place.id} place={place} />
        ))}
      </div>
    </div>
  )
}

export default Places