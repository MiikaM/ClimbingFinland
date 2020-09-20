import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import '../../scss/homepage.scss'
import LogoBlue from '../../images/logo-blue.svg'
import Footer from '../Footer'
import SearchBlue from '../../images/search-blue.svg'
import Places from '../Places'
import Login from '../Login'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../reducers/loginReducer'

const HomePage = (params) => {
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)
  const loggedIn = useSelector(state => state.session)
  useEffect(() => {
    if (params.location.open) {
      setIsOpen(params.location.open)
    }

  }, [])

  const handleLogout = () => {
    firebase.auth().signOut()
    dispatch(logoutUser())
  }


  const handleLoginModal = (e) => {
    e.preventDefault()
    setIsOpen(true)

    console.log({ isOpen })
  }

  return (
    <div>
      <section className="hero-home">
        <div className="wrapper">
          <div className="header">
            <nav>
              <ul>
                {/* <li>Favourites</li> */}
                <li style={{ cursor: 'pointer' }} onClick={handleLoginModal}>Log in</li>
                <li><button onClick={handleLogout} style={{ cursor: 'pointer' }}>Log Out</button></li>
              </ul>
            </nav>
          </div>



          <div className="hero-content-home">

            <img src={LogoBlue} alt='Top logo' className='top-logo' />
            <p className="subtitle">
              Find the best climbing gym for you
        </p>
          </div>
        </div>
      </section>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Login close={() => setIsOpen(false)} />
      </Modal>

      <section className="place-window-wrapper">
        <div className="wrapper ">
          <div className="search-container-main">
            <img src={SearchBlue} alt="" className="search-icon-main" />
            <input type="text" className='search-bar-main' placeholder="Search..." />
          </div>

          <Places />
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default HomePage
