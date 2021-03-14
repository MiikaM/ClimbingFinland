import React, { useState, useEffect } from 'react'
import Person1 from '../../images/profile_testit/colton-sturgeon-odKeTFsBDgE-unsplash.jpg'
import NavLogo from '../../images/logo-white-header.svg'
import LogoFooter from '../../images/logo-white.svg'
import '../../scss/user-settings.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'
import SettingsForm from '../SettingsForm'
import ChangePasswordForm from '../ChangePasswordForm'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom'
import { getUser } from '../../reducers/loginReducer'
import { uploadAvatar } from '../../reducers/userReducer'
import ThirdParty from './thirdParty'
import Admin from './admin'
import OnSite from './onSite'


const UserSettings = (params) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [yes, setYes] = useState(false)

  const match = useRouteMatch('/:username/settings')
  const user = params.location.user
  const login = useSelector(state => state.session)


  if (!user) {
    history.push('/')
  }


  let information
  const handleUpload = (event) => {
    event.preventDefault()

    if (event.target.files[0]) {
      dispatch(uploadAvatar(event.target.files[0]))
    }
  }
  if (login) {
    console.log('tyyppi', login.type)
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

  console.log({ information })


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
                  <img src={Person1} alt="" />
                  <input type='file' onChange={handleUpload} />
                  <div className="user-text">
                    <h2>John Doe</h2>

                    <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iusto dolorem non alias
                    consequuntur saepe
                    reprehenderit nesciunt repellat dolore obcaecati, error, sequi deserunt reiciendis voluptatum quisquam
                    facilis
                    nemo itaque incidunt.
          </p>
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
