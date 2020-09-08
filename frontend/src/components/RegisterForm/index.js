import React from 'react'
import '../../scss/register-form.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'

const RegisterForm = () => {
  return (
    <div>
      <NavHeader />

      <section className="wrapper">
        <div className="wrapper1 register-wrapper">
          <h2>Register</h2>
          <form action="">
            <label for="username">Username</label><br />
            <input type="text" /><br />

            <label for="password">Password</label><br />
            <input type="password" /><br />

            <label for="password-again">Password again</label><br />
            <input type="password" /><br />

            <input type="submit" className="submit" value="Next" /> <br />
            <input type="submit" className="submit" value="Continue with google" />
          </form>

        </div>
      </section>

      <section className="wrapper">
        <div className="wrapper2 register-wrapper">
          <h2>Register</h2>

          <form action="">
            <label for="first-name">First name</label><br />
            <input type="text" /><br />
            <label for="last-name">Last name</label><br />
            <input type="text" /><br />

            <label for="email">Email</label><br />
            <input type="text" /><br />


            <input type="submit" className="submit" value="Register" /> <br />


            <input type="submit" className="submit" value="Continue with google" />

          </form>


          <p className="login-small">
            Already have an account?
      </p>

          <div className="register-footer">

          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RegisterForm
