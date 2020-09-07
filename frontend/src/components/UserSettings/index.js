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



      <section class="content-wrapper-settings">
        <div class="wrapper">
          <div class="settings">
            <div class="user-settings">
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

            <div class="account-settings">
              <h2>Account</h2>

              <form action="" class="account-settings-form form">

                <label for="username">Username</label><br />
                <input type="text" /><br />

                <div class="name">
                  <label for="first-name">First name</label><br />
                  <input type="text" /><br />
                  <label for="last-name">Last name</label><br />
                  <input type="text" /><br />
                </div>

                <label for="email">Email</label><br />
                <input type="text" /><br />

                <label for="city">City</label><br />
                <input type="text" /><br />

                <div class="likes">
                  <label for="likes">Likes</label><br />
                  <input type="button" value="+" /><br />
                </div>
                <ul class="like-list">

                  <li class="tag-item first">
                    <p>
                      Boulder
                </p>
                  </li>

                  <li class="tag-item second">
                    <p>
                      Lead
                </p>
                  </li>

                  <li class="tag-item third">
                    <p>
                      Kuntosali
                </p>
                  </li>

                  <li class="tag-item fourth">
                    <p>
                      Kuntosali
                </p>
                  </li>
                </ul>

                <input type="submit" class="submit" value="Save" />
              </form>
            </div>

            <div class="change-password">
              <h2>Change password</h2>

              <form action="" class="form">
                <label for="old-password">Old password</label><br />
                <input type="password" /><br />

                <label for="new-password">New password</label><br />
                <input type="password" /><br />

                <label for="new-password-again">New password again</label><br />
                <input type="password" /> <br />

                <input type="submit" class="submit" value="Change password" />

              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default UserSettings
