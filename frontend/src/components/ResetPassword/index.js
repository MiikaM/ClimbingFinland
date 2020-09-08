import React from 'react'
import '../../scss/reset-password.scss'
import NavHeader from '../NavHeader'
import Footer from '../Footer'


const ResetPassword = () => {
  return (
    <div>
      <NavHeader />
      <section className="wrapper">
        <div className="reset-wrapper">
          <h2>Reset your password</h2>
          <p className="login-small">
            Enter your new password and press the 'reset password' button to reset your password
      </p>
          <form action="">

            <label for="new-password">New password</label><br />
            <input type="password" /><br />

            <label for="new-password-again">New password again</label><br />
            <input type="password" /> <br />

            <input type="submit" className="submit" value="Reset password" />
          </form>

          <div className="reset-footer">

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ResetPassword
