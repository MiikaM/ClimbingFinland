import React, { useState } from 'react'
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Link
} from '@material-ui/core'

import {
  ExpandLess,
  ExpandMore,
  CheckCircleOutlineOutlined,
  HighlightOffOutlined
} from '@material-ui/icons'
import Prices from './prices'
import OpenHours from './open_hours'

import Open from './open'




const Info = ({ place }) => {
  const [showOpenHours, setShowOpenHours] = useState(false)
  const [showPrices, setShowPrices] = useState(false)
  const pricing = !place.prices ?
    null :
    place.prices

  const open_hours = !place.openingHours ?
    null :
    place.openingHours

  const open = Open(open_hours)

  const handleOpenHoursClick = (e) => {
    e.preventDefault()
    setShowOpenHours(!showOpenHours)
  }

  const handlePricingClick = (e) => {
    e.preventDefault()
    setShowPrices(!showPrices)
  }

  return (
    <li className="place-wrapper">
      <div className="place-card">
        <a href={`/gym/${place.name} `}>
          <img src={place.image} alt={`${place.name} sali`} className="place" />
        </a>
        <div className="place-text-wrapper">
          <h2 className="place-header">{place.name}</h2>
          <blockquote className="place-description">
            {place.description}
          </blockquote>
          <button className="readmore-button" ><a href={`/gym/${place.name} `}> Read more</a></button>
        </div>
      </div>
    </li>
  )
}

export default Info