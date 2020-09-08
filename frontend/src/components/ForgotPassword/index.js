import React from 'react'
import '../../scss/reset-password.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'

const ForgotPassword = () => {
  return (
    <div>
      <NavHeader />
      <section className="wrapper">

        <div className="reset-wrapper">
          <h2>Forgot your password?</h2>
          <p className="login-small">
            Enter your email address to reset your password. If you can't see the messages check your spam folder
      </p>

          <form action="">
            <label for="email">Email</label><br />
            <input type="text" /><br />

            <input type="submit" className="submit" value="Send verification" />


          </form>

        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ForgotPassword
