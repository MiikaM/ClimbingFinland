import React from 'react'
import NavLogo from '../../images/logo-white-header.svg'
import SearchSVG from '../../images/search.svg'
import "../../scss/nav.scss"


const NavHeader = () => {
  return (
    <section class="nav-header">
      <div class="wrapper">
        <div class="nav-wrapper">
          <div class="search">

            <img src={NavLogo} alt="" class="header-logo" />
            <img src={SearchSVG} class="search-icon" alt="search-icon" />
            <input type="text" class='search-bar' placeholder="Search..." />
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
