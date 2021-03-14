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
import DropDownMenu from '../NavHeader/dropDownMenu'
import '../../scss/dropdown.scss'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import AvatarSVG from '../../images/avatar.svg'
import { getUser } from '../../reducers/loginReducer'
import HeaderLogIn from '../NavHeader/headerLogIn'
import NavHeader from '../NavHeader'


/**
 * Wrapper for the homepage.
 * @param {*} params 
 * Includes => 
 * - Modal handling 
 * - Places
 * - Search bar
 */
const HomePage = (params) => {
  const dispatch = useDispatch()
  const [dropdown, setDropdown] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const user = useSelector(state => state.session)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (params.location.open) {
      setIsOpen(params.location.open)
    }
    dispatch(getUser())
  }, [])


  const handleLoginModal = (e) => {
    e.preventDefault()
    setIsOpen(true)


  }



  const handleSearch = e => setSearch(e.target.value) 

  return (
    
/// Tää NavBariks 
    <div>  
      <section className="hero-home">
        <div className="wrappers">
        <NavHeader page={'main'} />

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
            <input type="text" className='search-bar-main' onChange={handleSearch} placeholder="Search..." />
          </div>

          <Places search={search}/>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default HomePage
