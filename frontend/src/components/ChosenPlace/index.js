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


const ChosenPlace = () => {
  const dispatch = useDispatch()
  const places = useSelector(state => state.places)
  const match = useRouteMatch('/places/:id')
  const place = match
    ? places.find(place => place.id === match.params.id)
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
          <div className="hero-content">
            <h1>Boulderpaja</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam, est ex in maiores itaque
              repellendus similique enim, dolorum nemo non modi, vel laborum assumenda natus mollitia quae et quod!
        </p>

            {/* <img src="./images/layout_testit/pexels-pixabay-434400.jpg" alt="place " /> */}
          </div>
        </div>
      </section>

      <section className="content-wrapper">
        <div className="wrapper content-grid">

          <div className="card">
            <h2>Aukioloajat</h2>
            <ul className="opening-list">
              <li className="open">
                <strong>Mon</strong>
                <p>14:00-20:00</p>
              </li>
              <li className="open">
                <strong>Tue</strong>
                <p>14:00-20:00</p>
              </li>
              <li className="open">
                <strong>Wed</strong>
                <p>14:00-20:00</p>
              </li>
              <li className="open">
                <strong>Thu</strong>
                <p>14:00-20:00</p>
              </li>
              <li className="open">
                <strong>Fri</strong>
                <p>14:00-20:00</p>
              </li>
              <li className="open">
                <strong>Sat</strong>
                <p>14:00-20:00</p>
              </li>
              <li className="open">
                <strong>Sun</strong>
                <p>14:00-20:00</p>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2>Info</h2>
            <ul className="info-list">
              <li>
                <img src={MailLogo} alt="" />
                <p>boulderpaja@gmail.com</p>
              </li>

              <li>
                <img src={WorldLogo} alt="" />
                <p>boulderpaja.fi</p>
              </li>

              <li>
                <img src={PlaceLogo} alt="" />
                <p>Ahjokatu 23 , 40100 Jyväskylä</p>
              </li>

              <li>
                <img src={PhoneLogo} alt="" />
                <p>049859345</p>
              </li>
            </ul>
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
              <li>
                <div className="card">
                  <div className="upper-category">
                    <h2>Aikuiset</h2>
                    <div className="text-wrapper">
                      <div className="text">
                        <strong>10€<br />/kerta</strong>
                      </div>
                    </div>
                  </div>

                  <div className="lower-category">

                    <p>90€<br />/10x-kertaa</p>
                    <p>75€<br />/kuukausi</p>

                  </div>
                </div>
              </li>

              <li>
                <div className="card">
                  <div className="upper-category">
                    <h2>Aikuiset</h2>
                    <div className="text-wrapper">
                      <div className="text">
                        <strong>10€<br />/kerta</strong>
                      </div>
                    </div>
                  </div>


                  <div className="lower-category">
                    <p>10x-kertaa</p>
                    <p>90€</p>
                    <p>kuukausikortti</p>
                    <p>75€</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="card">
                  <div className="upper-category">
                    <h2>Aikuiset</h2>
                    <div className="text-wrapper">
                      <div className="text">
                        <strong>10€<br />/kerta</strong>
                      </div>
                    </div>
                  </div>

                  <div className="lower-category">
                    <p>10x-kertaa</p>
                    <p>90€</p>
                    <p>kuukausikortti</p>
                    <p>75€</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="comments-wrapper">
        <div className="wrapper">
          <h2>Kommentit</h2>

          <ul className="comment-list-wrapper">
            <li className='card'>
              <div className="comment">
                <div className="comment-meta">
                  <img src="./images/profile_testit/colton-sturgeon-odKeTFsBDgE-unsplash.jpg" alt="" className="comment-avatar" />
                </div>
                <div className="comment-meta-meta">
                  <strong>John Doe</strong>
                  <p className="timestamp">23-05-2020</p>
                </div>

                <div className="comment-body">
                  <blockquote>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit explicabo adipisci ad, veniam
                    ducimus
                    perspiciatis impedit porro voluptates, dolorem itaque. Quis, harum? Minus debitis ratione similique, eum
                    qui
                    velit?
              </blockquote>
                </div>

              </div>
            </li>

            <li className='card'>
              <div className="comment">
                <div className="comment-meta">
                  <img src="./images/profile_testit/chad-madden-8mCMQSq41gQ-unsplash.jpg" alt="" className="comment-avatar" />
                </div>
                <div className="comment-meta-meta">
                  <strong>John Doe</strong>
                  <p className="timestamp">23-05-2020</p>
                </div>

                <div className="comment-body">
                  <blockquote>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel suscipit explicabo adipisci ad, veniam
                    ducimus
                    perspiciatis impedit porro voluptates, dolorem itaque. Quis, harum? Minus debitis ratione similique, eum
                    qui
                    velit?
              </blockquote>
                </div>
              </div>
            </li>
          </ul>

          {/* <div className="comment-form">
        <label for="comment">
          Your comment
        </label>
        <form action="" className='cmform' >

          <textarea name="comment" id="" cols="60" rows="2"></textarea>
          <input type="submit" className="submit" value="Comment" />
        </form>
      </div>  */}

        </div>
      </section>

      <Footer />
    </div >
  )
}

export default ChosenPlace