import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import Info from './info'

const Places = () => {
  const places = useSelector(state => state.places)
  const sortedPlaces = places.sort(place => place.name)


  return (

      <ul className="place-list">
        {
          sortedPlaces.map(place =>
            (

              <Info key={place.id} place={place}  />
            )

          )}
      </ul>
  )
}

export default Places