import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './listItem'

const ListComp = ({ place }) => {

    const places = useSelector(state => state.places)

    if (!places) return null

    const sortedPlaces = places.sort(place => place.name)

    return (
        <div>
            <ul>
                {sortedPlaces.map(place => (
                    <ListItem key={place.id} place={place} />
                ))}
            </ul>
        </div>
    )
}

export default ListComp
