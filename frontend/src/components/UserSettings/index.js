import React from 'react'
import Person1 from '../../images/profile_testit/colton-sturgeon-odKeTFsBDgE-unsplash.jpg'
import NavLogo from '../../images/logo-white-header.svg'
import LogoFooter from '../../images/logo-white.svg'
import '../../scss/user-settings.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'


const UserSettings = () => {
  return (
    <div>
      <NavHeader />

      <section className="hero-wrapper">
        <div className="wrapper">
          <div className="hero-content">
            <img src={Person1} alt="" />
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


      <section className="content-wrapper-settings">
        <div className="wrapper">
          <div className="settings">

            <div className="user-settings wrap">
              <div className="align " >

                <h2>User Settings</h2>
                <ul>
                  <li>
                    General
            </li>

                  <li>
                    Change Password
            </li>
                </ul>
              </div>
            </div>


            <div className="account-settings wrap ">
              <div className="align " >

                <h2>Account</h2>

                <form action="" className="account-settings-form form">

                  <label for="username">Username</label><br />
                  <input type="text" /><br />

                  <div className="name">
                    <label for="first-name">First name</label><br />
                    <input type="text" /><br />
                    <label for="last-name">Last name</label><br />
                    <input type="text" /><br />
                  </div>

                  <label for="email">Email</label><br />
                  <input type="text" /><br />

                  <label for="city">City</label><br />
                  <input type="text" /><br />

                  <div className="likes">
                    <label for="likes">Likes</label><br />
                    <input type="button" value="+" /><br />
                  </div>
                  <ul className="like-list">

                    <li className="tag-item first">
                      <p>
                        Boulder
                </p>
                    </li>

                    <li className="tag-item second">
                      <p>
                        Lead
                </p>
                    </li>

                    <li className="tag-item third">
                      <p>
                        Kuntosali
                </p>
                    </li>

                    <li className="tag-item fourth">
                      <p>
                        Kuntosali
                </p>
                    </li>
                  </ul>

                  <input type="submit" className="submit" value="Save" />
                </form>
              </div>
            </div>

            {/* <div className="change-password wrap">
              <div className="align " >

                <h2>Change password</h2>

                <form action="" className="form">
                  <label for="old-password">Old password</label><br />
                  <input type="password" /><br />

                  <label for="new-password">New password</label><br />
                  <input type="password" /><br />

                  <label for="new-password-again">New password again</label><br />
                  <input type="password" /> <br />

                  <input type="submit" className="submit" value="Change password" />

                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default UserSettings
