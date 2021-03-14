import React, { useState, useEffect } from 'react'

import NavLogo from '../../images/logo-white-header.svg'
import SearchSVG from '../../images/search.svg'
import Login from '../Login'
import Modal from '../Modal'
import "../../scss/nav.scss"
import '../../scss/dropdown.scss'
import { useSpring, animated } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUser } from '../../reducers/loginReducer'
import HeaderLogIn from './headerLogIn'

/**
 * Wrapper for the Navbar
 * Includes => 
 * - Logo
 * - User picture
 * - Dropdown menu
 * - Modal
 */
const NavHeader = ({ page = 'secondary' }) => {
  const dispatch = useDispatch()
  const props = useSpring({ opacity: 1, marginTop: 0, from: { opacity: 0, marginTop: -500 } })
  const fadeIn = useSpring({ cursor: 'pointer', opacity: 1, from: { opacity: 0 }, config: { delay: 1000, duration: 1000 } })
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()
  const user = useSelector(state => state.session)


  const handleLoginModal = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])


  if (!user) return null
  
  
  return (
    <div>
      <animated.section style={props} className={`nav-header ${page}`}>
        <div className="wrapper">
          <div className="nav-wrapper">
            <div className="search">
              {
                page === 'main' ?
                  null :
                  <animated.img style={fadeIn} src={NavLogo} alt="" className="header-logo" onClick={() => history.push('/')} />

              }

              <img src={SearchSVG} className="search-icon" alt="search-icon" />
              <input type="text" className='search-bar' placeholder="Search..." />
            </div>

            <HeaderLogIn modal={handleLoginModal} user={user} page={page} />

          </div>
        </div>



      </animated.section >
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Login close={() => setIsOpen(false)} />
      </Modal>

    </div>
  )
}

export default NavHeader
