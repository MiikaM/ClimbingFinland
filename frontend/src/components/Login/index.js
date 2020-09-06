import React from 'react'
import '../../scss/login.scss'
import LoginPic from '../../images/layout_testit/roya-ann-miller-G2QYE9czCEw-unsplash.jpg'


const Login = () => {
  return (
      <section>
        <div class="wrapper">
          <div class="login">
            <div class="login-image">
              <img src={LoginPic} alt="" />
            </div>

            <div class="login-container">
              <div class="login-header">
                <h2>Log in</h2>
                <img src="./images/close.svg" alt="" />
              </div>

              <form action="" class="form">
                <label for="username">Username</label><br />
                <input type="text" /><br />

                <label for="password">Password</label> <br />
                <input type="password" /><br />


                <input type="submit" class="submit" value="Log in" /> <br />

                <input type="submit" class="submit" value="Continue with google" />
              </form>


              <p class="login-small">
                Forgot password?
          </p>

              <p class="login-small">
                Don't have an account?
          </p>


              <div class="login-footer">
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login
