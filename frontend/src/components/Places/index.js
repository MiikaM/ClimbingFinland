import React from 'react'
import { useSelector } from 'react-redux'
import { Paper } from '@material-ui/core'
import Info from './info'

const Places = () => {
  const places = useSelector(state => state.places)
  const sortedPlaces = places.sort(place => place.name)


  return (
    <div>
      <h1> Climbing places</h1>

      <div>
        {sortedPlaces.map(place => (
          <Paper key={place.id} elevationn={3}>
            <Info place={place} />
          </Paper>
        ))}
      </div>
    </div>
  )
}

export default Places