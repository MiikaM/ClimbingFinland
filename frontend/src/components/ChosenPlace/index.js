import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import Prices from '../Places/prices'
import OpenHours from '../Places/open_hours'

const ChosenPlace = () => {
  const places = useSelector(state => state.places)
  const match = useRouteMatch('/places/:id')
  const place = match
    ? places.find(place => place.id === match.params.id)
    : null
  

  if(!place) return null
  console.log({ match, place})

  return (
    <div>
      <h1>{place.name}</h1>
      <img src={place.image} alt='From this place' />
      {place.description}
      <h2>Pricing</h2>
      <Prices prices={place.prices} />
      <h2>Opening hours</h2>
      <OpenHours show={true} open_hours={place.openingHours} />
      {place.tags}
      <p>
        The pricing is directional. More accurate information about pricing and everything else can be found
        from the gyms website.
      </p>
      {/* <CommentSection /> */}
    </div >
  )
}

export default ChosenPlace