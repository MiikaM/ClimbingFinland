import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

import CommentForm from '../CommentForm'
import CommentSection from '../CommentSection'
import {  getComments } from '../../reducers/commentReducer'


import MailLogo from '../../images/mail.svg'
import WorldLogo from '../../images/world.svg'
import PlaceLogo from '../../images/google-place.svg'
import PhoneLogo from '../../images/phone.svg'
import '../../scss/place.scss'
import '../../scss/comment.scss'
import Footer from '../Footer'
import NavHeader from '../NavHeader'
import PriceCategory from '../PriceCategory'

/**
 * Show the info page of a chosen place.
 * The page includes 
 * - Picture
 * - Comments
 * - Opening hours
 * - Prices
 * - Other information
 */
const ChosenPlace = () => {
  const dispatch = useDispatch()
  const places = useSelector(state => state.places)
  const colors = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'nineth', 'tenth']

  const match = useRouteMatch('/gym/:place_name')
  const place = match
    ? places.find(place => place.name === match.params.place_name)
    : null


  useEffect(() => {
    
    if (match?.params?.place_name !== undefined) {
      dispatch(getComments(match.params.place_name))
    }
  }, [place])

  if (!place) return null

  const image = place.image.replace(/\\/g, '/')


  return (
    <div>
      <NavHeader />

      <section className="hero-wrapper" style={{
        background: `url('../${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 45%',
        borderRadius: '0 0 10px 10px',
      }}>
      </section>

      <section className="info-sec">
        <div className="wrapper">
          <div className="hero-content-place">
            <h1>{place.name}</h1>
            <p className="subtitle-place">
              {place.description}
            </p>

          </div>
        </div>
      </section>

      <section className="content-wrapper">
        <div className="wrapper" >
          <div className="content-grid">

            <div className="card opening-wrapper margin-left">
              <h2>Aukioloajat</h2>
              <ul className="opening-list">
                <li className="open">
                  <strong>Mon</strong>
                  <p>{place.openingHours.mon.open} - {place.openingHours.mon.close}</p>
                </li>
                <li className="open">
                  <strong>Tue</strong>
                  <p>{place.openingHours.tue.open} - {place.openingHours.tue.close}</p>
                </li>
                <li className="open">
                  <strong>Wed</strong>
                  <p>{place.openingHours.wed.open} - {place.openingHours.wed.close}</p>
                </li>
                <li className="open">
                  <strong>Thu</strong>
                  <p>{place.openingHours.thu.open} - {place.openingHours.thu.close}</p>
                </li>
                <li className="open">
                  <strong>Fri</strong>
                  <p>{place.openingHours.fri.open} - {place.openingHours.fri.close}</p>
                </li>
                <li className="open">
                  <strong>Sat</strong>
                  <p>{place.openingHours.sat.open} - {place.openingHours.sat.close}</p>
                </li>
                <li className="open">
                  <strong>Sun</strong>
                  <p>{place.openingHours.sun.open} - {place.openingHours.sun.close}</p>
                </li>
              </ul>
            </div>

            <div className="card margin-right">
              <h2>Info</h2>
              <ul className="info-list">
                <li>
                  <img src={MailLogo} alt="" />
                  <p className="place-info">{place.email}</p>
                </li>

                <li>
                  <img src={WorldLogo} alt="" />
                  <a href={place.url} className="place-info">{place.url}</a>
                </li>

                <li>
                  <img src={PlaceLogo} alt="" />
                  <p className="place-info">{place.address}</p>
                </li>

                <li>
                  <img src={PhoneLogo} alt="" />
                  <p className="place-info">{place.phone}</p>
                </li>
              </ul>
            </div>

            <div className="card margin-left">
              <h2>Tags</h2>
              <ul className="likes-user">
                {place.tags.map((tag, index) =>
                (
                  <li key={index} className={`tag-item ${colors[Math.floor(Math.random() * colors.length)]}`} >
                    <p>{tag}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


      </section>

      <section className="prices">
        <div className="wrapper">
          <h1>Hinnasto</h1>
          <blockquote>
            <strong>HUOM!</strong> Hinnat ovat suuntaa antavia. Hinnat eivät välttämättä pidä paikkaansa jos sivuja ei ole
        ehditty päivittämään. Hinnat eivät myöskään sisällä tarvike vuokria.
      </blockquote>

          <div className="price-wrapper">
            <ul className="price-list">
              {place.prices.map(price => (
                <PriceCategory key={price.name} price={price} name={price.name} />
              ))}
            </ul>
          </div>
        </div>
      </section>


      <CommentSection header="Kommentit" place_id={place.id} />
      <CommentForm place_id={place.id} />

      <Footer />
    </div >
  )
}

export default ChosenPlace