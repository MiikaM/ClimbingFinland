import React from 'react'
import ReactDOM from 'react-dom'
import '../../scss/homepage.scss'
import LogoBlue from '../../images/logo-blue.svg'
import Footer from '../Footer'
import SearchBlue from '../../images/search-blue.svg'
import Places from '../Places'

const HomePage = (params) => {

  return (
    <div>
      <section className="hero-home">
        <div className="wrapper">
          <div className="header">
            <nav>
              <ul>
                <li>Favourites</li>
                <li><a href="logIn.html">Log in</a></li>
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
