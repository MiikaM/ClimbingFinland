import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import Prices from '../Places/prices'
import OpenHours from '../Places/open_hours'
import CommentForm from '../CommentForm'
import CommentSection from '../CommentSection'
import { addComment } from '../../reducers/commentReducer'
import LogoFooter from '../../images/logo-white.svg'
import SearchSVG from '../../images/search.svg'
import NavLogo from '../../images/logo-white-header.svg'

import MailLogo from '../../images/mail.svg'
import WorldLogo from '../../images/world.svg'
import PlaceLogo from '../../images/google-place.svg'
import PhoneLogo from '../../images/phone.svg'
import '../../scss/place.scss'
import Footer from '../Footer'
import NavHeader from '../NavHeader'
import PriceCategory from '../PriceCategory'


const ChosenPlace = () => {
  const dispatch = useDispatch()
  const places = useSelector(state => state.places)
  const match = useRouteMatch('/gym/:place_name')
  const place = match
    ? places.find(place => place.name === match.params.place_name)
    : null


  // if (!place) return null
  // console.log({ match, place })

  const submitComment = (values) => {
    try {
      dispatch(addComment({
        comment: values.comment,
        date: new Date()
      }))
    } catch (e) {
      console.error('Error on submitComment: ', e.message)
    }

  }

  return (
    <div>
      {/* <h1>{place.name}</h1>
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
      <CommentSection />
      <CommentForm onSubmit={submitComment} /> */}

      <NavHeader />

      <section className="hero-wrapper">
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
                  <p>{place.openingHours.mon}</p>
                </li>
                <li className="open">
                  <strong>Tue</strong>
                  <p>{place.openingHours.tue}</p>
                </li>
                <li className="open">
                  <strong>Wed</strong>
                  <p>{place.openingHours.wed}</p>
                </li>
                <li className="open">
                  <strong>Thu</strong>
                  <p>{place.openingHours.thu}</p>
                </li>
                <li className="open">
                  <strong>Fri</strong>
                  <p>{place.openingHours.fri}</p>
                </li>
                <li className="open">
                  <strong>Sat</strong>
                  <p>{place.openingHours.sat}</p>
                </li>
                <li className="open">
                  <strong>Sun</strong>
                  <p>{place.openingHours.sun}</p>
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
                  <p className="place-info">{place.url}</p>
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
          </div>
        </div>
      </section>

      <section className="prices">
        <div className="wrapper">
          <h1>Hinnasto</h1>
          <blockquote>
            <strong>HUOM!</strong> Hinnat ovat suuntaa antavia. Hinnat eivät välttämättä pidä paikkaansa jos sivuja ei ole
        ehditty päivittämään.
      </blockquote>

          <div className="price-wrapper">
            <ul className="price-list">
              {Object.values(place.prices).map(price => (
                <PriceCategory key={price} price={place} />
              ))}
            </ul>
          </div>
        </div>
      </section>


      <CommentSection header="Updates" />
      <CommentForm />

      <Footer />
    </div >
  )
}

export default ChosenPlace