import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PlaceForm from './index'

const ListItem = ({ place }) => {
    const [open, setOpen] = useState(false)
    const places = useSelector(state => state.places)

    if (!places) return null

    return (
        <li>
            <h2 onClick={() => setOpen(!open)}>{place.name}</h2>
            {open ?
                (<PlaceForm place={place} />) :
                null
            }

        </li>

    )
}

export default ListItem
