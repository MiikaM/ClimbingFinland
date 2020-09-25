import React, { useState, useEffect } from 'react'

import NavLogo from '../../images/logo-white-header.svg'
import SearchSVG from '../../images/search.svg'
import Login from '../Login'
import Modal from '../Modal'
import "../../scss/nav.scss"
import '../../scss/dropdown.scss'
import AvatarSVG from '../../images/avatar.svg'
import DropDownMenu from './dropDownMenu'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUser } from '../../reducers/loginReducer'


const NavHeader = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const history = useHistory()

  const user = useSelector(state => state.session)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const handleLoginModal = (e) => {
    e.preventDefault()
    setIsOpen(true)

    console.log({ isOpen })
  }


  return (
    <section className="nav-header">
      <div className="wrapper">
        <div className="nav-wrapper">
          <div className="search">

            <img src={NavLogo} alt="" className="header-logo" onClick={() => history.push('/')} />
            <img src={SearchSVG} className="search-icon" alt="search-icon" />
            <input type="text" className='search-bar' placeholder="Search..." />
          </div>

          <nav>
            <ul>
              {/* <li>Favourites</li> */}

              {
                (!user) ?
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


              {/* <li><button onClick={() => {
                firebase.auth().signOut()
              }}>Sign Out</button></li> */}
            </ul>
          </nav>

        </div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Login close={() => setIsOpen(false)} />
      </Modal>

    </section>
  )
}

export default NavHeader
