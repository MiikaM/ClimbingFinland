import React, { useState, useEffect, useRef } from 'react'
import firebase from 'firebase'
import '../../scss/homepage.scss'
import LogoBlue from '../../images/logo-blue.svg'
import Footer from '../Footer'
import SearchBlue from '../../images/search-blue.svg'
import Places from '../Places'
import Login from '../Login'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import DropDownMenu from '../NavHeader/dropDownMenu'
import '../../scss/dropdown.scss'
import AvatarSVG from '../../images/avatar.svg'
import { getUser } from '../../reducers/loginReducer'
import { useSpring } from 'react-spring'



const HomePage = (params) => {
  const dispatch = useDispatch()
  // const fadeIn = useSpring()
  const [dropdown, setDropdown] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const user = useSelector(state => state.session)

  useEffect(() => {
    if (params.location.open) {
      setIsOpen(params.location.open)
    }
    dispatch(getUser())
  }, [])


  const handleLoginModal = (e) => {
    e.preventDefault()
    setIsOpen(true)

    console.log({ isOpen })

  }

  console.log({ user })

  return (
    <div>
      <section className="hero-home">
        <div className="wrapper">
          <div className="header">
            <nav>
              <ul>
                {
                  !user ?
                    <li style={{ cursor: 'pointer' }} onClick={handleLoginModal}>Log in</li> :
                    <li>
                      <img src={AvatarSVG} className='nav-icon' alt='user' onClick={() => setDropdown(!dropdown)} />
                      {
                        dropdown ?
                          <DropDownMenu user={user} /> :
                          null
                      }
                    </li>

                }
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
