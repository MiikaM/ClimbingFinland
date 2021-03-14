import React, { useState, useEffect } from 'react'
import '../../scss/homepage.scss'
import LogoBlue from '../../images/logo-blue.svg'
import Footer from '../Footer'
import SearchBlue from '../../images/search-blue.svg'
import Places from '../Places'
import Login from '../Login'
import Modal from '../Modal'
import { useDispatch } from 'react-redux'
import '../../scss/dropdown.scss'
import { getUser } from '../../reducers/loginReducer'
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
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (params.location.open) {
      setIsOpen(params.location.open)
    }
    dispatch(getUser())
  }, [dispatch])

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
