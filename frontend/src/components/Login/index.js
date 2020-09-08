import React from 'react'
import '../../scss/login.scss'
import LoginPic from '../../images/layout_testit/roya-ann-miller-G2QYE9czCEw-unsplash.jpg'


const Login = () => {
  return (
      <section>
        <div className="wrapper">
          <div className="login">
            <div className="login-image">
              <img src={LoginPic} alt="" />
            </div>

            <div className="login-container">
              <div className="login-header">
                <h2>Log in</h2>
                <img src="./images/close.svg" alt="" />
              </div>

              <form action="" className="form">
                <label for="username">Username</label><br />
                <input type="text" /><br />

                <label for="password">Password</label> <br />
                <input type="password" /><br />


                <input type="submit" className="submit" value="Log in" /> <br />

                <input type="submit" className="submit" value="Continue with google" />
              </form>


              <p className="login-small">
                Forgot password?
          </p>

              <p className="login-small">
                Don't have an account?
          </p>


              <div className="login-footer">
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login
