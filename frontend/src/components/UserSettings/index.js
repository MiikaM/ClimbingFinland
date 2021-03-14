import React, { useState, useEffect } from 'react'

import '../../scss/user-settings.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'

import ThirdParty from './thirdParty'
import Admin from './admin'
import OnSite from './onSite'


const UserSettings = (params) => {
  const history = useHistory()

  const user = params.location.user
  const login = useSelector(state => state.session)


  if (!user) {
    history.push('/')
  }


  let information
  // const handleUpload = (event) => {
  //   event.preventDefault()

  //   if (event.target.files[0]) {
  //     dispatch(uploadAvatar(event.target.files[0]))
  //   }
  // }
  if (login) {
    switch (login.type) {
      case 'AdminUser':
        information = <Admin login={login} />
        break;
      case 'ThirdPartyUser':
        information = <ThirdParty login={login} />
        break;
      default:
        information = <OnSite login={login} />
    }
  }

  const addDefaultSrc = (e) => {
    e.target.src = `${login.avatar}`
  }
  return (
    <div>
      <NavHeader />
      {
        !login ?
          <h1 style={{ textAlign: 'center' }}>You are not logged in. You can go log in by pressing the Login button in the NavBar</h1> :
          <>
            <section className="hero-wrapper">
              <div className="wrapper">
                <div className="hero-content">
                  <img onError={addDefaultSrc} src={`../${login.avatar}`} alt="" />
                  {/* <input type='file' onChange={handleUpload} /> */}
                  <div className="user-text">
                    <h2>{login.name}</h2>

                  </div>
                </div>
              </div>
            </section>
            {information}
          </>

      }


      <Footer />
    </div >
  )
}

export default UserSettings
