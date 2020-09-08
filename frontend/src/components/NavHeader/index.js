import React from 'react'
import NavLogo from '../../images/logo-white-header.svg'
import SearchSVG from '../../images/search.svg'
import "../../scss/nav.scss"


const NavHeader = () => {
  return (
    <section className="nav-header">
      <div className="wrapper">
        <div className="nav-wrapper">
          <div className="search">

            <img src={NavLogo} alt="" className="header-logo" />
            <img src={SearchSVG} className="search-icon" alt="search-icon" />
            <input type="text" className='search-bar' placeholder="Search..." />
          </div>

          <nav>
            <ul>
              <li>Favourites</li>
              <li><a href="logIn.html">Log in</a></li>
            </ul>
          </nav>

        </div>
      </div>

    </section>
  )
}

export default NavHeader
